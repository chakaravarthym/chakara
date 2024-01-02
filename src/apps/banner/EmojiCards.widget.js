module.exports = {
  entry: './src/apps/banner/index.tsx',
  shortcode: 'banner',
  title: 'Banner Cards',
  status: 'stable',
  description: 'Incredible banner trading cards',
  preview: {
    url: `${process.env.PUBLIC_URL}/storybook/iframe.html?id=widgets-emoji-cards-components--cat&viewMode=story`,
  },
  useExternalPeerDependencies: ['react', 'react-dom', 'react-intl'],
  settingsSchema: {
    type: 'object',
    properties: {
      fields: {
        type: 'object',
        properties: {
          emoji: {
            type: 'string',
            title: 'Banner code',
            description: 'The name of the articles to display.',
            examples: ['the_horns', 'pinching_hand'],
          },
        },
      },
    },
  },
  additionalCustomProperties: {
    availableTranslations: [
      'ar',
      'de',
      'en',
      'es',
      'fr',
      'it',
      'ja',
      'ko',
      'pl',
      'pt',
      'ru',
      'tr',
      'zh',
    ],
  },
};
