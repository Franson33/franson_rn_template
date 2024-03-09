module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          @assets: './assets',
          @components: './components',
          @constants: './constants',
          @helpers: './helpers',
          @hooks: './hooks',
          @navigator: './navigator',
          @screens: './screens',
          @styles: './styles',
          @theme: './theme',
        },
      },
    ],
  ],
};
