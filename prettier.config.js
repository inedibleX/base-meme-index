/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: 'all',
  singleQuote: true,
  semi: false,
  printWidth: 80,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStyleSheet: './src/app/_styles/globals.css',
  tailwindPreserveWhitespace: true,
  tailwindFunctions: ['classNames'],
}

module.exports = config
