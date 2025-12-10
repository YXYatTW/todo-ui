import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'src/**/*.graphql',
  generates: {
    './src/types/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-operations'
      ],
    },
  },
};

export default config;
