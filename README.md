# A well-cooked design system boilerplate

Welcome to **Fusillo Design System**, an open-source design system monorepo boilerplate optimized for fast design & development, easy maintenance, and accessibility.

## Development

### Installation

First of all, clone this repository or use it as a template (the main button at the top right).  

Fusillo repository uses [Turborepo](https://turbo.build/repo/docs). In the project root directory run `npm install` to install dependencies and `turbo dev` to start the dev server.

### Architecture

The monorepo is structured into four main folders: apps (in which there are two examples of apps developed with next and connected to the design system), docs (in which the design system documentation site is found), packages (in which there are the folder with the design system components and the folder with the script that allows you to transform the variables that come directly from Figma into css variables) and plugins (in which you find the plugin that allows you to push the figma variables directly from figma to github in json format).

- fusillo-design-system
  - apps
    - app-example
    - next-example
  - docs
    - design-system
  - packages
    - design-system
    - design-tokens
  - plugins
    - figma-plugin

## Design

First of all, duplicate a copy of the design system figma file from [figma community](https://www.figma.com/community/file/1348715515441124509/fusillo-design-system-boilerplate).

Move the file to a team, and then under `assets` and `libraries` publish the design system.

## Figma Plugin 
Description coming soon...

## Documentation
Visit [Fusillo website](https://www.fusillo.design/) to view the documentation.

## Team
Currently, the project is maintained by: 
- [Federico Kratter Thaler](https://www.linkedin.com/in/kkratter/)
- [Alessandra Arpi](https://www.linkedin.com/in/alessandra-arpi/).

## Credits
**Fusillo Design System** is powered by these incredible open source projects:

- https://reactjs.org
- https://nextjs.org
- https://turbo.build
- https://mdxjs.com
- https://tailwindcss.com
- https://www.radix-ui.com/
- https://ui.shadcn.com/
- https://lucide.dev/icons/
- https://storybook.js.org/
- https://nextra.site/
- https://github.com/pacocoursey/next-themes
- https://github.com/shikijs/shiki
- https://github.com/nextapps-de/flexsearch
- https://github.com/francoismassart/eslint-plugin-tailwindcss
- https://amzn.github.io/style-dictionary/#/

## License
Licensed under the MIT license.
