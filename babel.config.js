module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'defaults', // Adjust as needed for your environment
        modules: false, // Ensure Babel doesn’t transform modules
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
