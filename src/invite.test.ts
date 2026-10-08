import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { BOT_PERMISSIONS, inviteUrl, readDiscordClientId } from './invite.ts';

const CLIENT_ID = '123456789012345678';

describe('inviteUrl', () => {
  it('builds the Discord OAuth invite for a snowflake client id', () => {
    const raw = inviteUrl(CLIENT_ID);
    assert.ok(raw);

    const url = new URL(raw);
    assert.equal(url.origin + url.pathname, 'https://discord.com/oauth2/authorize');
    assert.equal(url.searchParams.get('client_id'), CLIENT_ID);
    assert.equal(url.searchParams.get('permissions'), String(BOT_PERMISSIONS));
    assert.equal(url.searchParams.get('scope'), 'bot applications.commands');
  });

  it('rejects missing or invalid client ids', () => {
    assert.equal(inviteUrl(undefined), null);
    assert.equal(inviteUrl(''), null);
    assert.equal(inviteUrl('   '), null);
    assert.equal(inviteUrl('not-an-id'), null);
    assert.equal(inviteUrl('123'), null);
  });
});

describe('readDiscordClientId', () => {
  it('prefers the process environment', () => {
    assert.equal(
      readDiscordClientId({ DISCORD_CLIENT_ID: CLIENT_ID }, 'DISCORD_CLIENT_ID=999'),
      CLIENT_ID,
    );
  });

  it('reads a quoted value from dotenv text', () => {
    const dotenv = ['# comment', 'OTHER=1', `DISCORD_CLIENT_ID="${CLIENT_ID}"`].join('\n');
    assert.equal(readDiscordClientId({}, dotenv), CLIENT_ID);
  });

  it('returns undefined when the value is empty', () => {
    assert.equal(readDiscordClientId({ DISCORD_CLIENT_ID: '  ' }, 'DISCORD_CLIENT_ID='), undefined);
  });
});
