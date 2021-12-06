/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "prettier"
    ],
    "overrides": [
      {
        "extends": [
          "plugin:@typescript-eslint/recommended",
          "plugin:@typescript-eslint/recommended-requiring-type-checking",
        ],
        "files": [
          '**/*.ts'
        ],
        "parser": "@typescript-eslint/parser",
        "parserOptions": {
            "project": "./tsconfig.eslint.json",
            "sourceType": "module"
        },
        "plugins": [
          "@typescript-eslint"
        ],
        "rules": {
          "@typescript-eslint/adjacent-overload-signatures": "error",
          "@typescript-eslint/array-type": [
              "error",
              {
                  "default": "array"
              }
          ],
          "@typescript-eslint/ban-types": [
              "error",
              {
                  "types": {
                      "Object": {
                          "message": "Avoid using the `Object` type. Did you mean `object`?"
                      },
                      "Function": {
                          "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                      },
                      "Boolean": {
                          "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                      },
                      "Number": {
                          "message": "Avoid using the `Number` type. Did you mean `number`?"
                      },
                      "String": {
                          "message": "Avoid using the `String` type. Did you mean `string`?"
                      },
                      "Symbol": {
                          "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                      }
                  }
              }
          ],
          "@typescript-eslint/consistent-type-assertions": "error",
          "@typescript-eslint/dot-notation": "error",
          "@typescript-eslint/indent": "off",
          "@typescript-eslint/member-delimiter-style": [
              "off",
              {
                  "multiline": {
                      "delimiter": "none",
                      "requireLast": true
                  },
                  "singleline": {
                      "delimiter": "semi",
                      "requireLast": false
                  }
              }
          ],
          "@typescript-eslint/naming-convention": "error",
          "@typescript-eslint/no-empty-function": "error",
          "@typescript-eslint/no-empty-interface": "error",
          "@typescript-eslint/no-explicit-any": "off",
          "@typescript-eslint/no-misused-new": "error",
          "@typescript-eslint/no-namespace": "error",
          "@typescript-eslint/no-parameter-properties": "off",
          "@typescript-eslint/no-shadow": [
              "error",
              {
                  "hoist": "all"
              }
          ],
          "@typescript-eslint/no-unused-expressions": "error",
          "@typescript-eslint/no-use-before-define": "off",
          "@typescript-eslint/no-var-requires": "error",
          "@typescript-eslint/prefer-for-of": "error",
          "@typescript-eslint/prefer-function-type": "error",
          "@typescript-eslint/prefer-namespace-keyword": "error",
          "@typescript-eslint/quotes": "off",
          "@typescript-eslint/semi": [
              "off",
              null
          ],
          "@typescript-eslint/triple-slash-reference": [
              "error",
              {
                  "path": "always",
                  "types": "prefer-import",
                  "lib": "always"
              }
          ],
          "@typescript-eslint/type-annotation-spacing": "off",
          "@typescript-eslint/unified-signatures": "error",
        }
      }
    ],
    "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
    },
    "plugins": [
        "eslint-plugin-prefer-arrow",
    ],
    "rules": {
        "arrow-parens": [
            "off",
            "always"
        ],
        "brace-style": [
            "off",
            "off"
        ],
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "error",
        "dot-notation": "error",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-denylist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "indent": "off",
        "linebreak-style": "off",
        "max-classes-per-file": [
            "error",
            1
        ],
        "max-len": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-empty": "error",
        "no-empty-function": "error",
        "no-eval": "error",
        "no-extra-semi": "off",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-multiple-empty-lines": "off",
        "no-new-wrappers": "error",
        "no-shadow": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "off",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "error",
        "no-unused-labels": "error",
        "no-use-before-define": "off",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padded-blocks": [
            "off",
            {
                "blocks": "never"
            },
            {
                "allowSingleLineBlocks": true
            }
        ],
        "prefer-arrow/prefer-arrow-functions": "error",
        "prefer-const": "error",
        "quote-props": "off",
        "quotes": "off",
        "radix": "error",
        "semi": "off",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "off",
            "never"
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "use-isnan": "error",
        "valid-typeof": "off"
    }
};
