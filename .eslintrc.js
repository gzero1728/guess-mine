module.exports = {
    "plugins": ["prettier"],
    "rules": {
        "no-console": "off",
        "prettier/prettier": "error"
    },
    "env": {
        browser: true,
        es6: true,
        node: true
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "parserOptions": {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    "prettier/prettier": ["error", { "singleQuote": true, "parser": "flow" }]
};