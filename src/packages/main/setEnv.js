const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const argObj = {};
args.forEach((obj) => {
  const [key, val] = obj.split('=');
  argObj[key] = val;
});

const envConfig = {
  dev: {
    REACT_APP_CHILD_REACT_ENTRY: 'http://localhost:3011',
    REACT_APP_CHILD_REACT_ACTIVERULE: 'micro-react',
    REACT_APP_CHILD_VUE_ENTRY: 'http://localhost:3012',
    REACT_APP_CHILD_VUE_ACTIVERULE: 'micro-vue',
  },
  test: {
    REACT_APP_CHILD_REACT_ENTRY: '/other/s10y10.github.io/blog/child-react/',
    REACT_APP_CHILD_REACT_ACTIVERULE:
      '/other/s10y10.github.io/blog/main/micro-react',
    REACT_APP_CHILD_VUE_ENTRY: '/other/s10y10.github.io/blog/child-vue/',
    REACT_APP_CHILD_VUE_ACTIVERULE: 'micro-vue',
  },
  production: {
    REACT_APP_CHILD_REACT_ENTRY: '/blog/child-react/',
    REACT_APP_CHILD_REACT_ACTIVERULE: '/blog/micro-react',
    REACT_APP_CHILD_VUE_ENTRY: '/blog/child-vue/',
    REACT_APP_CHILD_VUE_ACTIVERULE: '/blog/micro-vue',
  },
};

const env = argObj.env || 'dev';
const envData = envConfig[env];
const fileName = path.resolve(__dirname, '.env');
fs.writeFileSync(fileName, '', { flag: 'w' });
for (const key in envData) {
  const line = `${key}=${envData[key]}\n`;
  fs.appendFileSync(fileName, line);
}
