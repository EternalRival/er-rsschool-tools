import { ESLint } from 'eslint';

async function eslintCmd(files) {
  const eslint = new ESLint();
  const isPathIgnoredList = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));

  return files.reduce((acc, file, i) => {
    return isPathIgnoredList[i] ? acc : `${acc} "${file}"`;
  }, 'npm run ci:lint');
}

const formatCmd = 'npm run ci:format';

const stylelintCmd = 'npm run ci:stylelint';

const config = {
  'src/**/*': [formatCmd],
  'src/**/*.{ts,tsx}': [eslintCmd],
  'src/**/*.css': [stylelintCmd],
};

export default config;
