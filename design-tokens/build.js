const StyleDictionary = require('style-dictionary');
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

// FOUNDATIONS CSS

const styleFoundations = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'export/',
      files: [
        {
          destination: 'foundations.css',
          filter: 'foundationsFilter',
          format: 'foundationsFormat',
          //         options: {
          //            outputReferences: true,
          //          },
        },
      ],
    },
  },
});
styleFoundations.registerFilter({
  name: 'foundationsFilter',
  matcher: function (token) {
    return token.path.includes('Foundations');
  },
});
styleFoundations.registerFormat({
  name: 'foundationsFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;

    const formattedTokens = `${fileHeader({
      file,
    })}:root {\n${formattedVariables({
      format: 'css',
      dictionary,
      outputReferences,
    })}\n}`;

    const modifiedTokens = formattedTokens
      .replace(/foundations-|color-|typography-/g, '')
      .replace(/brand-brand/g, 'brand')
      .replace(/neutral-neutral/g, 'neutral')
      .replace(/red-red/g, 'red')
      .replace(/orange-orange/g, 'orange')
      .replace(/amber-amber/g, 'amber')
      .replace(/yellow-yellow/g, 'yellow')
      .replace(/lime-lime/g, 'lime')
      .replace(/green-green/g, 'green')
      .replace(/emerald-emerald/g, 'emerald')
      .replace(/teal-teal/g, 'teal')
      .replace(/cyan-cyan/g, 'cyan')
      .replace(/sky-sky/g, 'sky')
      .replace(/blue-blue/g, 'blue')
      .replace(/indigo-indigo/g, 'indigo')
      .replace(/violet-violet/g, 'violet')
      .replace(/purple-purple/g, 'purple')
      .replace(/fuchsia-fuchsia/g, 'fuchsia')
      .replace(/pink-pink/g, 'pink')
      .replace(/rose-rose/g, 'rose');

    return modifiedTokens;
  },
});
styleFoundations.buildAllPlatforms();

// FOUNDATIONS JS

const styleFoundationsJs = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'export/',
      files: [
        {
          format: 'javascript/module',
          destination: 'foundations.js',
          filter: 'foundationsJsFilter',
        },
      ],
    },
  },
});
styleFoundationsJs.registerFilter({
  name: 'foundationsJsFilter',
  matcher: function (token) {
    return token.path.includes('Foundations');
  },
});
styleFoundationsJs.buildAllPlatforms();

// TOKENS LIGHT CSS

const styleTokensLight = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'export/',
      files: [
        {
          destination: 'tokens-light.css',
          filter: 'tokensLightFilter',
          format: 'tokensLightFormat',
        },
      ],
    },
  },
});
styleTokensLight.registerFilter({
  name: 'tokensLightFilter',
  matcher: function (token) {
    return token.path.includes('Tokens') && token.path.includes('Light');
  },
});
styleTokensLight.registerFormat({
  name: 'tokensLightFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;

    const formattedTokens = `${fileHeader({
      file,
    })}:root {\n${formattedVariables({
      format: 'css',
      dictionary,
      outputReferences,
    })}\n}`;

    const modifiedTokens = formattedTokens.replace(
      /tokens-|color-|light-/g,
      ''
    );

    return modifiedTokens;
  },
});
styleTokensLight.buildAllPlatforms();

// TOKENS LIGHT JS

const styleTokensLightJs = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    js: {
      transformGroup: 'js',
      buildPath: 'export/',
      files: [
        {
          format: 'javascript/module',
          destination: 'tokens-light.js',
          filter: 'tokensLightJsFilter',
        },
      ],
    },
  },
});
styleTokensLightJs.registerFilter({
  name: 'tokensLightJsFilter',
  matcher: function (token) {
    return (
      token.path.includes('Tokens') &&
      token.path.includes('Light') &&
      token.type === 'color'
    );
  },
});
styleTokensLightJs.buildAllPlatforms();

// TOKENS DARK

const styleTokensDark = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'export/',
      files: [
        {
          destination: 'tokens-dark.css',
          filter: 'tokensDarkFilter',
          format: 'tokensDarkFormat',
        },
      ],
    },
  },
});
styleTokensDark.registerFilter({
  name: 'tokensDarkFilter',
  matcher: function (token) {
    return token.path.includes('Tokens') && token.path.includes('Dark');
  },
});
styleTokensDark.registerFormat({
  name: 'tokensDarkFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;

    const formattedTokens = `${fileHeader({
      file,
    })}:root {\n${formattedVariables({
      format: 'css',
      dictionary,
      outputReferences,
    })}\n}`;

    const modifiedTokens = formattedTokens.replace(/tokens-|color-|dark-/g, '');

    return modifiedTokens;
  },
});
styleTokensDark.buildAllPlatforms();

// CONFIG TOKEN

const styleConfig = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'js',
      buildPath: 'export/',
      files: [
        {
          destination: 'config.js',
          filter: 'configFilter',
          format: 'javascript/module-flat',
        },
      ],
    },
  },
});
styleConfig.registerFilter({
  name: 'configFilter',
  matcher: function (token) {
    return token.path.includes('Config');
  },
});
styleConfig.buildAllPlatforms();

// BRAND TOKEN

const styleBrand = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'export/',
      files: [
        {
          destination: 'brand.css',
          filter: 'brandFilter',
          format: 'brandFormat',
        },
      ],
    },
  },
});
styleBrand.registerFilter({
  name: 'brandFilter',
  matcher: function (token) {
    return token.path.includes('brand-500');
  },
});
styleBrand.registerFormat({
  name: 'brandFormat',
  formatter: function ({ dictionary }) {
    const brandTokens = dictionary.allProperties;
    let cssVariables = '';

    brandTokens.forEach((token) => {
      const hslValue = hexToHSL(token.value);
      const brandName = token.name.replace(
        /foundations-color-brand-brand-500/g,
        'brand'
      );
      cssVariables += `--${brandName}-hue: ${hslValue.h}deg;\n`;
      cssVariables += `--${brandName}-saturation: ${hslValue.s}%;\n`;
    });

    return `:root {\n${cssVariables}}`;
  },
});
styleBrand.buildAllPlatforms();

// Funzione per convertire un valore esadecimale (hex) in HSL
function hexToHSL(hex) {
  hex = hex.replace(/^#/, ''); // Rimuovi il carattere "#"
  const r = parseInt(hex.slice(0, 2), 16) / 255;
  const g = parseInt(hex.slice(2, 4), 16) / 255;
  const b = parseInt(hex.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const lightness = (max + min) / 2;

  let hue = 0;
  let saturation = 0;

  if (max !== min) {
    const delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case r:
        hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60;
        break;
      case g:
        hue = ((b - r) / delta + 2) * 60;
        break;
      case b:
        hue = ((r - g) / delta + 4) * 60;
        break;
    }
  }

  return {
    h: Math.round(hue),
    s: Math.round(saturation * 100),
    l: Math.round(lightness * 100),
  };
}
