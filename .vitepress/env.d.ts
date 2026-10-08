export {};

declare module 'vitepress' {
  namespace DefaultTheme {
    interface Config {
      inviteUrl?: string;
    }
  }
}
