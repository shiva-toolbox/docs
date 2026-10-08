import { defineComponent, h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import HomeActions from './HomeActions.vue';
import { INVITE_URL } from '../../lib/links';
import './custom.css';

const InviteButton = defineComponent({
  name: 'InviteButton',
  setup() {
    return () => {
      if (!INVITE_URL) return null;

      return h(
        'a',
        {
          class: 'invite-button hero',
          href: INVITE_URL,
          target: '_blank',
          rel: 'noreferrer',
        },
        'Invite',
      );
    };
  },
});

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-actions-after': () => h(HomeActions),
    });
  },
  enhanceApp({ app }) {
    app.component('InviteButton', InviteButton);
  },
} satisfies Theme;
