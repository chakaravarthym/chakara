module.exports = {
  entry: './src/apps/articles/index.tsx',
  shortcode: 'earticles',
  title: 'Articles Cards',
  status: 'stable',
  description: 'Incredible articles trading cards',
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
            title: 'Articles code',
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
