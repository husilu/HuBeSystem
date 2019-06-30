// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  extends: ['standard','plugin:vue/recommended'],
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'indent': ["off", "tab"],
    'no-trailing-spaces': 0,
    'generator-star-spacing': 0,
    'no-debugger': 2,
    semi: [2, 'always'], //语句强制分号结尾
    'space-before-function-paren': [0, 'always'],
    'no-return-assign': 0, //return 语句中不能有赋值表达式
    'one-var': 0,
    'no-cond-assign': 0,
    'vue/require-default-prop': 'off',
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 5,
      "multiline": {
        "max": 5,
        "allowFirstLine": false
      }
    }],
    "vue/html-self-closing": ["error", {
      "html": {
        "void": "never",
        "normal": "never",
        "component": "never"
      },
      "svg": "always",
      "math": "always"
    }],
    "quotes": [0, ["double"]]
  }
};
