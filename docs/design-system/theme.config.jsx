import * as ds from '@docs/tokens/config.js';

const EmptyComponent = () => {
  return <></>;
};

export default {
  logo: <span className="docs_logo">{ds.ConfigName}</span>,
  project: {
    link: 'https://github.com/kkratterf',
  },
  useNextSeoProps() {
    return {
      titleTemplate: `${ds.ConfigName} – %s`,
    };
  },
  footer: {
    component: null,
  },
  search: {
    loading: 'Loading...',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    autoCollapse: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    component: EmptyComponent,
  },
  feedback: {
    content: null,
  },
  gitTimestamp: null,
};
