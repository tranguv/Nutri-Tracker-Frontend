module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // Add aliases for commonly used paths
          '@components': './src/components',
          '@assets': './src/assets',
          // Add more aliases as needed
        },
      },
    ],
  ],
};
