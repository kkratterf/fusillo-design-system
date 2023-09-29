import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import * as logo from '../design-tokens/export/config.js';

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  docsRepositoryBase: 'https://fusillo-design-system.vercel.app/',
  footer: {
    text: 'Nextra Docs Template',
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${logo.ConfigName}`,
    };
  },
};

export default config
