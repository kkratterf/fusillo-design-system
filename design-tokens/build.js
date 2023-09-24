const StyleDictionary = require('style-dictionary').extend({
  source: ['properties/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'build/',
      files: [
        {
          destination: 'variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    // ...
  },
});

StyleDictionary.buildAllPlatforms();
