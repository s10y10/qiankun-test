export const CHILD_APP_NAME = {
  REACT: 'micro-react',
  VUE: 'micro-vue',
};

export const CHILD_APP_CONFIG = {
  [CHILD_APP_NAME.REACT]: {
    name: CHILD_APP_NAME.REACT,
    container: '#micro-react',
    entry: process.env.REACT_APP_CHILD_REACT_ENTRY,
    activeRule: process.env.REACT_APP_CHILD_REACT_ACTIVERULE,
  },
  [CHILD_APP_NAME.VUE]: {
    name: CHILD_APP_NAME.VUE,
    container: '#micro-vue',
    entry: process.env.REACT_APP_CHILD_VUE_ENTRY,
    activeRule: process.env.REACT_APP_CHILD_VUE_ACTIVERULE,
  },
};
