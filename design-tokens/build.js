const StyleDictionary = require('style-dictionary');
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;




// PRIMITIVE TOKEN

const stylePrimitive = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'export/',
      files: [
        {
          destination: 'primitive.css',
          filter: 'primitiveFilter',
          format: 'primitiveFormat',
//         options: {
//            outputReferences: true,
//          },
        },
      ],
    },
  },
});
stylePrimitive.registerFilter({
  name: 'primitiveFilter',
  matcher: function (token) {
    return token.path.includes('01 - Primitive Token');
  },
});
stylePrimitive.registerFormat({
  name: 'primitiveFormat',
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
      /01-primitive-token-|color-|typography-/g,
      ''
    );

    return modifiedTokens;
  },
});
stylePrimitive.buildAllPlatforms();




// SEMANTIC LIGHT TOKEN

const styleSemanticLight = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'export/',
      files: [
        {
          destination: 'semantic-light.css',
          filter: 'semanticLightFilter',
          format: 'semanticLightFormat',
        },
      ],
    },
  },
});
styleSemanticLight.registerFilter({
  name: 'semanticLightFilter',
  matcher: function (token) {
    return (
      token.path.includes('02 - Semantic Token') && token.path.includes('Light')
    );
  },
});
styleSemanticLight.registerFormat({
  name: 'semanticLightFormat',
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
      /02-semantic-token-|color-/g,
      ''
    );

    return modifiedTokens;
  },
});
styleSemanticLight.buildAllPlatforms();




// SEMANTIC DARK TOKEN

const styleSemanticDark = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'export/',
      files: [
        {
          destination: 'semantic-dark.css',
          filter: 'semanticDarkFilter',
          format: 'semanticDarkFormat',
        },
      ],
    },
  },
});
styleSemanticDark.registerFilter({
  name: 'semanticDarkFilter',
  matcher: function (token) {
    return (
      token.path.includes('02 - Semantic Token') && token.path.includes('Dark')
    );
  },
});
styleSemanticDark.registerFormat({
  name: 'semanticDarkFormat',
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
      /02-semantic-token-|color-/g,
      ''
    );

    return modifiedTokens;
  },
});
styleSemanticDark.buildAllPlatforms();




// COMPONENT TOKEN

const styleComponent = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'export/',
      files: [
        {
          destination: 'component.css',
          filter: 'componentFilter',
          format: 'componentFormat',
        },
      ],
    },
  },
});
styleComponent.registerFilter({
  name: 'componentFilter',
  matcher: function (token) {
    return (
      token.path.includes('03 - Component Token')
    );
  },
});
styleComponent.registerFormat({
  name: 'componentFormat',
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
      /03-component-token-|color-/g,
      ''
    );

    return modifiedTokens;
  },
});
styleComponent.buildAllPlatforms();




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
        /01-primitive-token-color-brand-brand-500/g,
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
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

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