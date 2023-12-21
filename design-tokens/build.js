// Import the Style Dictionary package
const StyleDictionary = require('style-dictionary');
// Importing formatHelpers from Style Dictionary for file headers and variable formatting
const { fileHeader, formattedVariables } = StyleDictionary.formatHelpers;

// FOUNDATIONS CSS: Configuration for generating foundational CSS styles

// Initialize a new Style Dictionary instance for CSS foundations
const styleFoundations = StyleDictionary.extend({
  source: ['tokens/**/*.json'], // Define the source files (JSON tokens)
  platforms: {
    css_foundations: {
      transformGroup: 'css', // Use the CSS transformation group
      buildPath: '../design-system/style/', // Output directory for the CSS file
      files: [
        {
          destination: 'foundations.css', // Output file name
          filter: 'foundationsFilter', // Filter to select specific tokens
          format: 'foundationsFormat', // Custom format for output
        },
      ],
    },
  },
});

// Register a custom filter for CSS foundations
styleFoundations.registerFilter({
  name: 'foundationsFilter',
  matcher: function (token) {
    // Filter tokens that include 'Foundations' and 'Color' in their path
    return token.path.includes('Foundations') && token.path.includes('Color');
  },
});

// Register a custom format for CSS foundations
styleFoundations.registerFormat({
  name: 'foundationsFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;

    // Format tokens and remove redundant prefixes
    const formattedTokens = `${fileHeader({
      file,
    })}@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n  :root {\n${formattedVariables(
      {
        format: 'css',
        dictionary,
        outputReferences,
      }
    )}\n  }\n}`;

    // Additional custom processing of tokens
    const modifiedTokens = formattedTokens
      .replace(/foundations-/g, '') // Remove 'foundations-' prefix
      .replace(
        /(brand|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\1/g,
        '$1'
      ); // Simplify repeated color names

    return modifiedTokens;
  },
});

// Build the CSS foundations
styleFoundations.buildAllPlatforms();


// FOUNDATIONS JS: Configuration for generating foundational JavaScript styles

// Extend Style Dictionary for JavaScript foundations
const styleFoundationsJs = StyleDictionary.extend({
  source: ['tokens/**/*.json'], // Specify the source JSON token files
  platforms: {
    js_foundations: {
      transformGroup: 'js', // Apply JavaScript-specific transformations
      buildPath: '../documentation/tokens/', // Directory for the generated JS file
      files: [
        {
          format: 'javascript/module', // Output format as a JavaScript module
          destination: 'foundations.js', // Output file name
          filter: 'foundationsJsFilter', // Apply a custom filter
        },
      ],
    },
  },
});

// Register a filter for JavaScript foundations
styleFoundationsJs.registerFilter({
  name: 'foundationsJsFilter',
  matcher: function (token) {
    // Select tokens that include 'Foundations' in their path
    return token.path.includes('Foundations');
  },
});

// Build the JavaScript foundations
styleFoundationsJs.buildAllPlatforms();

// TOKENS ALL: Configuration for generating all token styles (CSS and JS)

// Extend Style Dictionary for all tokens
const styleTokens = StyleDictionary.extend({
  source: ['tokens/**/*.json'], // Source JSON token files
  platforms: {
    css_tokens: {
      transformGroup: 'css', // CSS transformations
      buildPath: '../design-system/style/', // Output directory for CSS
      files: [
        {
          destination: 'tokens.css', // CSS output file name
          filter: 'tokensFilter', // Custom filter for tokens
          format: 'tokensFormat', // Custom format for tokens
        },
      ],
    },
    css_tokens_documentation: {
      transformGroup: 'css', // CSS transformations for documentation
      buildPath: '../documentation/style/', // Output directory for documentation CSS
      files: [
        {
          destination: 'tokens.css', // Documentation CSS output file
          filter: 'tokensFilter', // Use the same custom filter
          format: 'tokensFormat', // Use the same custom format
        },
      ],
    },
  },
});

// Register a filter for all tokens
styleTokens.registerFilter({
  name: 'tokensFilter',
  matcher: function (token) {
    // Filter to include tokens that have 'Tokens' in their path
    return token.path.includes('Tokens');
  },
});

// Register a custom format for all tokens
styleTokens.registerFormat({
  name: 'tokensFormat',
  formatter: function ({ dictionary, file, options }) {
    const { outputReferences } = options;

    // Process and format all tokens, separating light and dark themes
    const formattedTokens = formattedVariables({
      format: 'css',
      dictionary,
      outputReferences,
    });

    // Separate tokens for light theme
    const lightTokens = formattedTokens
      .split('\n')
      .filter((line) => line.includes('light'))
      .map((line) => line.replace(/tokens-|light-/g, ''))
      .join('\n');

    // Separate tokens for dark theme
    const darkTokens = formattedTokens
      .split('\n')
      .filter((line) => line.includes('dark'))
      .map((line) => line.replace(/tokens-|dark-/g, ''))
      .join('\n');

    // Combine and format light and dark theme tokens
    const result = `${fileHeader({
      file,
    })}@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer base {\n\n  :root {\n${lightTokens}\n  } \n\n .dark {\n${darkTokens}\n  }\n\n}`;

    // Additional custom processing of tokens
    const modifiedTokens = result
      .replace(/tokens-|light-|dark-/g, '') // Remove prefixes
      // Simplify naming for various token types
      .replace(
        /background-(neutral|brand|danger|warning|success|info|discovery)-/g,
        ''
      )
      .replace(/border-neutral-/g, '')
      .replace(
        /-border-(brand|danger|warning|success|info|discovery)-border-\1/g,
        '-border-$1'
      )
      .replace(/text-neutral-/g, '')
      .replace(
        /-text-(brand|danger|warning|success|info|discovery)-text-\1/g,
        '-text-$1'
      )
      .replace(/-icon-neutral-icon/g, '-icon')
      .replace(
        /-icon-(brand|danger|warning|success|info|discovery)-icon-\1/g,
        '-icon-$1'
      )
      .replace(
        /(width|height|spacing|radius|breakpoints|opacity)-(?:\1|space|border)/g,
        '$1'
      )
      .replace(/(opacity-[^:]+:\s*)(\d+)px/g, function (match, p1, p2) {
        // Convert pixel values to opacity percentage
        var opacityValue = parseInt(p2, 10) / 100;
        return p1 + opacityValue.toFixed(1);
      });

    return modifiedTokens;
  },
});

// Build all token platforms (CSS and documentation CSS)
styleTokens.buildAllPlatforms();

// TOKENS JS: Configuration for generating JavaScript token styles

// Extend Style Dictionary for JavaScript tokens
const styleTokensJs = StyleDictionary.extend({
  source: ['tokens/**/*.json'], // Source JSON token files
  platforms: {
    js_tokens: {
      transformGroup: 'js', // JavaScript transformations
      buildPath: '../documentation/tokens/', // Output directory for JS tokens
      files: [
        {
          format: 'javascript/module', // Output format as JavaScript module
          destination: 'tokens.js', // JS output file name
          filter: 'tokensJsFilter', // Custom filter for JS tokens
        },
      ],
    },
  },
});

// Register a filter for JavaScript tokens
styleTokensJs.registerFilter({
  name: 'tokensJsFilter',
  matcher: function (token) {
    // Filter to include tokens that have 'Tokens' in their path
    return token.path.includes('Tokens');
  },
});

// Build the JavaScript tokens
styleTokensJs.buildAllPlatforms();

// CONFIG TOKEN: Configuration for generating configuration tokens

// Extend Style Dictionary for configuration tokens
const styleConfig = StyleDictionary.extend({
  source: ['tokens/**/*.json'], // Source JSON token files
  platforms: {
    js_config: {
      transformGroup: 'js', // JavaScript transformations
      buildPath: '../documentation/tokens/', // Output directory for configuration tokens
      files: [
        {
          destination: 'config.js', // Configuration JS output file name
          filter: 'configFilter', // Custom filter for configuration tokens
          format: 'javascript/module-flat', // Output format as a flat JavaScript module
        },
      ],
    },
  },
});

// Register a filter for configuration tokens
styleConfig.registerFilter({
  name: 'configFilter',
  matcher: function (token) {
    // Filter to include tokens that have 'Config' in their path
    return token.path.includes('Config');
  },
});

// Build the configuration tokens
styleConfig.buildAllPlatforms();

// BRAND TOKEN: Configuration for generating brand-specific tokens

// Extend Style Dictionary for brand tokens
const styleBrand = StyleDictionary.extend({
  source: ['tokens/**/*.json'], // Source JSON token files
  platforms: {
    css_brand_tokens: {
      transformGroup: 'css', // CSS transformations
      buildPath: '../documentation/style/', // Output directory for brand CSS
      files: [
        {
          destination: 'brand.css', // Brand CSS output file name
          filter: 'brandFilter', // Custom filter for brand tokens
          format: 'brandFormat', // Custom format for brand tokens
        },
      ],
    },
  },
});

// Register a filter for brand tokens
styleBrand.registerFilter({
  name: 'brandFilter',
  matcher: function (token) {
    // Filter to include tokens specific to 'brand-500'
    return token.path.includes('brand-500');
  },
});

// Register a custom format for brand tokens
styleBrand.registerFormat({
  name: 'brandFormat',
  formatter: function ({ dictionary }) {
    const brandTokens = dictionary.allProperties;
    let cssVariables = '';

    // Process brand tokens and convert to HSL values
    brandTokens.forEach((token) => {
      const hslValue = hexToHSL(token.value);
      const brandName = token.name.replace(
        /foundations-color-brand-brand-500/g,
        'nextra-primary'
      );
      cssVariables += `--${brandName}-hue: ${hslValue.h}deg;\n`;
      cssVariables += `--${brandName}-saturation: ${hslValue.s}%;\n`;
    });

    return `:root {\n${cssVariables}}`;
  },
});

// Build the brand tokens
styleBrand.buildAllPlatforms();

function hexToHSL(hex) {
  hex = hex.replace(/^#/, '');
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
