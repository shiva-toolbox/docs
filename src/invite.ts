const PERMISSIONS = {
  addReactions: 1 << 6,
  viewChannel: 1 << 10,
  sendMessages: 1 << 11,
  embedLinks: 1 << 14,
  readMessageHistory: 1 << 16,
  manageRoles: 1 << 28,
} as const;

export const BOT_PERMISSIONS = Object.values(PERMISSIONS).reduce((sum, bit) => sum + bit, 0);

const SNOWFLAKE = /^\d{17,20}$/;

export function inviteUrl(clientId: string | undefined): string | null {
  const id = clientId?.trim();
  if (!id || !SNOWFLAKE.test(id)) return null;

  const url = new URL('https://discord.com/oauth2/authorize');
  url.searchParams.set('client_id', id);
  url.searchParams.set('permissions', String(BOT_PERMISSIONS));
  url.searchParams.set('scope', 'bot applications.commands');
  return url.toString();
}

function unquote(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }

  return value;
}

export function readDiscordClientId(
  env: NodeJS.ProcessEnv,
  dotenv?: string,
): string | undefined {
  const fromEnv = env.DISCORD_CLIENT_ID?.trim();
  if (fromEnv) return fromEnv;
  if (!dotenv) return undefined;

  for (const line of dotenv.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    if (trimmed.slice(0, eq).trim() !== 'DISCORD_CLIENT_ID') continue;

    const value = unquote(trimmed.slice(eq + 1).trim());
    return value.length > 0 ? value : undefined;
  }

  return undefined;
}
