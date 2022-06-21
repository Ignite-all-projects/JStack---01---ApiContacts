module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "object-curly-newline": "off",
    "no-confusing-arrow": "off",
    "implicit-arrow-linebreak": "off",
    "function-paren-newline": "off",
    "comma-dangle": "off",
    quotes: "off",
  },
};
