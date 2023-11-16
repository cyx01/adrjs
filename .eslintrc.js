module.exports = {
    parserOptions: {
        ecmaVersion: 8,
    },
    extends: ["airbnb"],
    globals: {},
    rules: {
        "no-undef": "error",
        "max-len": "off",
        "prefer-rest-params": "off",
        "no-param-reassign": [
            "error",
            {
                props: false,
            },
        ],
        radix: "off",
        "no-plusplus": "off",
        "no-shadow": "warn",
        "no-underscore-dangle": "off",
        "prefer-destructuring": "warn",
        "no-fallthrough": "warn",
        camelcase: "warn",
        "guard-for-in": "warn",
        "new-cap": "off",
        indent: ["error", 4],
        "prefer-regex-literals": "off",
        "object-curly-newline": [
            "error",
            {
                minProperties: 1,
            },
        ],
        "object-property-newline": ["error"],
        semi: ["error", "always"],
        quotes: ["off", "single"],
        "no-debugger": "error",
        "no-console": "error",
        "no-unreachable": "error",
        "no-constant-condition": "error",
        "no-dupe-keys": "error",
        "no-unused-vars": "error",
        "space-unary-ops": 1,
        "func-name-matching": "error",
        "comma-spacing": [
            "error",
            {
                before: false,
                after: true,
            },
        ],
        "one-var": ["error", "consecutive"],
    },
};
