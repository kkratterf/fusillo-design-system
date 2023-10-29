const StyleDictionary = require('style-dictionary');
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

// FOUNDATIONS CSS

const styleFoundations = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css_foundations: {
      transformGroup: 'css',
      buildPath: '../design-system/style/',
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
    return (
      token.path.includes('Foundations') &&
      token.path.includes('Color')
    );
  },
});
styleFoundations.registerFormat({
  name: 'foundationsFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;

    const formattedTokens = `${fileHeader({
      file,
    })}@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  :root {\n${formattedVariables(
      {
        format: 'css',
        dictionary,
        outputReferences,
      }
    )}\n  }\n}`;

    const modifiedTokens = formattedTokens
      .replace(/foundations-/g, '')
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
      .replace(/rose-rose/g, 'rose')

    return modifiedTokens;
  },
});
styleFoundations.buildAllPlatforms();





// FOUNDATIONS JS

const styleFoundationsJs = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    js_foundations: {
      transformGroup: 'js',
      buildPath: '../documentation/tokens/',
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





// TOKENS ALL

const styleTokens = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css_tokens: {
      transformGroup: 'css',
      buildPath: '../design-system/style/',
      files: [
        {
          destination: 'tokens.css',
          filter: 'tokensFilter',
          format: 'tokensFormat',
        },
      ],
    },
    css_tokens_documentation: {
      transformGroup: 'css',
      buildPath: '../documentation/style/',
      files: [
        {
          destination: 'tokens.css',
          filter: 'tokensFilter',
          format: 'tokensFormat',
        },
      ],
    },
  },
});
styleTokens.registerFilter({
  name: 'tokensFilter',
  matcher: function (token) {
    return token.path.includes('Tokens');
  },
});
styleTokens.registerFormat({
  name: 'tokensFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;

    // Ottenere tutte le variabili formattate
    const formattedTokens = formattedVariables({
      format: 'css',
      dictionary,
      outputReferences,
    });

    // Estrarre i token "light" e "dark" in base al nome
    const lightTokens = formattedTokens
      .split('\n')
      .filter((line) => line.includes('light'))
      .map((line) => line.replace(/tokens-|light-/g, '')) // Rimuovi prefisso
      .join('\n');

    const darkTokens = formattedTokens
      .split('\n')
      .filter((line) => line.includes('dark'))
      .map((line) => line.replace(/tokens-|dark-/g, '')) // Rimuovi prefisso
      .join('\n');

    // Componi il risultato
    const result = `${fileHeader({
      file,
    })}@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n\n  :root {\n${lightTokens}\n  } \n\n .dark {\n${darkTokens}\n  }\n\n}`;

    const modifiedTokens = result
      .replace(/tokens-|light-|dark-/g, '')
      .replace(/background-neutral-/g, '')
      .replace(/background-brand-/g, '')
      .replace(/background-danger-/g, '')
      .replace(/background-warning-/g, '')
      .replace(/background-success-/g, '')
      .replace(/background-info-/g, '')
      .replace(/background-discovery-/g, '')
      .replace(/border-neutral-/g, '')
      .replace(/-border-brand-border-brand/g, '-border-brand')
      .replace(/-border-danger-border-danger/g, '-border-danger')
      .replace(/-border-warning-border-warning/g, '-border-warning')
      .replace(/-border-success-border-success/g, '-border-success')
      .replace(/-border-info-border-info/g, '-border-info')
      .replace(/-border-discovery-border-discovery/g, '-border-discovery')
      .replace(/text-neutral-/g, '')
      .replace(/-text-brand-text-brand/g, '-text-brand')
      .replace(/-text-danger-text-danger/g, '-text-danger')
      .replace(/-text-warning-text-warning/g, '-text-warning')
      .replace(/-text-success-text-success/g, '-text-success')
      .replace(/-text-info-text-info/g, '-text-info')
      .replace(/-text-discovery-text-discovery/g, '-text-discovery')
      .replace(/-icon-neutral-icon/g, '-icon')
      .replace(/-icon-brand-icon-brand/g, '-icon-brand')
      .replace(/-icon-danger-icon-danger/g, '-icon-danger')
      .replace(/-icon-warning-icon-warning/g, '-icon-warning')
      .replace(/-icon-success-icon-success/g, '-icon-success')
      .replace(/-icon-info-icon-info/g, '-icon-info')
      .replace(/-icon-discovery-icon-discovery/g, '-icon-discovery')
      .replace(/width-width/g, 'width')
      .replace(/height-height/g, 'height')
      .replace(/spacing-space/g, 'space')
      .replace(/breakpoints-breakpoints/g, 'breakpoints')

    return modifiedTokens;
  },
});
styleTokens.buildAllPlatforms();





// TOKENS JS

const styleTokensJs = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    js_tokens: {
      transformGroup: 'js',
      buildPath: '../documentation/tokens/',
      files: [
        {
          format: 'javascript/module',
          destination: 'tokens.js',
          filter: 'tokensJsFilter',
        },
      ],
    },
  },
});
styleTokensJs.registerFilter({
  name: 'tokensJsFilter',
  matcher: function (token) {
    return (
      token.path.includes('Tokens')
    );
  },
});
styleTokensJs.buildAllPlatforms();




// CONFIG TOKEN

const styleConfig = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    js_config: {
      transformGroup: 'js',
      buildPath: '../documentation/tokens/',
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
    css_brand_tokens: {
      transformGroup: 'css',
      buildPath: '../documentation/style/',
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
