import * as ds from './tokens/config.js';

export default {
  logo: <span className="docs_logo">{ds.ConfigName}</span>,
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${ds.ConfigName}`,
    };
  },
  footer: {
    component: null,
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  search: {
    loading: 'Loading...',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};
