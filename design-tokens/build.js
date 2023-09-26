const StyleDictionary = require('style-dictionary');
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;




// PRIMITIVE TOKEN

const stylePrimitive = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/primitive/',
      files: [
        {
          destination: 'primitive.css',
          filter: 'primitiveFilter',
          format: 'primitiveFormat',
          options: {
            outputReferences: true,
          },
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
      buildPath: 'build/semantic/',
      files: [
        {
          destination: 'light.css',
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
      buildPath: 'build/semantic/',
      files: [
        {
          destination: 'dark.css',
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
      buildPath: 'build/component/',
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
      transformGroup: 'css',
      buildPath: 'build/config/',
      files: [
        {
          destination: 'config.css',
          filter: 'configFilter',
          format: 'configFormat',
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
styleConfig.registerFormat({
  name: 'configFormat',
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
      /config-/g,
      ''
    );

    return modifiedTokens;
  },
});
styleConfig.buildAllPlatforms();