import { defineComponent, h, type PropType } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { useData } from 'vitepress';
import './custom.css';

const InviteButton = defineComponent({
  name: 'InviteButton',
  props: {
    size: {
      type: String as PropType<'nav' | 'hero'>,
      default: 'hero',
    },
  },
  setup(props) {
    const { theme, lang } = useData();

    return () => {
      const url = theme.value.inviteUrl;
      if (!url) return null;

      const label = lang.value.startsWith('pt') ? 'Adicionar ao Discord' : 'Add to Discord';

      return h(
        'a',
        {
          class: ['invite-button', props.size],
          href: url,
          target: '_blank',
          rel: 'noreferrer',
        },
        label,
      );
    };
  },
});

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(InviteButton, { size: 'nav' }),
      'home-hero-actions-after': () => h(InviteButton, { size: 'hero' }),
    });
  },
  enhanceApp({ app }) {
    app.component('InviteButton', InviteButton);
  },
} satisfies Theme;
