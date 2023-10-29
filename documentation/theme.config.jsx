import * as logo from './tokens/config.js';

export default {
  logo: <span className="docs_logo">{logo.ConfigName}</span>,
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  useNextSeoProps() {
    return {
      titleTemplate: `%s – ${logo.ConfigName}`,
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
};
