const isDev = process.env.NODE_ENV === "development";
module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks"
    ],
    "settings": {
        "react": {
            "createClass": "createReactClass",
            "pragma": "React",
            "version": "detect",
        },
        "propWrapperFunctions": [
            // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
            "forbidExtraProps",
            { "property": "freeze", "object": "Object" },
            { "property": "myFavoriteWrapper" }
        ],
        "linkComponents": [
          // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
          "Hyperlink",
          { "name": "Link", "linkAttribute": "to" }
        ]
      },
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
      },
      "plugins": [
        "react",
        "react-hooks"
      ],
      "rules": {
        // 待处理区
        "no-use-before-define": 0,

        "react/jsx-filename-extension": 0,
        "react/prop-types": 0,
        "react/destructuring-assignment": 0, // 需解构
        "react/state-in-constructor": 0,
        "react/sort-comp": 0, // 自定义事件排序生命周期函数之后
        "react/no-access-state-in-setstate": 0,

        "jsx-a11y/click-events-have-key-events": 0, // 强制要求 click 事件伴随一个键盘事件
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/label-has-associated-control": 0, // 后期放开
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/media-has-caption": 0,
        "no-nested-ternary": 1,
        "radix": ["error", "as-needed"],
        "no-continue": 1,
        "react/no-unused-state": 2,
        "prefer-const": 2,
        "brace-style": 2,
        "class-methods-use-this": 1,
        "no-unused-vars": [isDev ? "warn" : "error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": true }],
        "no-unreachable":isDev?'warn':'error',
        "react/jsx-props-no-spreading": 0,
        "react/no-array-index-key": 0,
        "max-len": ["warn", { "code": 180, "ignoreComments": true }],
        "no-param-reassign": 0,
        "import/extensions": 0,
        "no-unused-expressions": 0,
        "max-classes-per-file": 0,
        "no-return-await": 0,
        "camelcase": 0,
        "import/no-unresolved": 0,
        "object-curly-newline": 0,
        "no-shadow": 0,
        "import/no-dynamic-require": 0,
        "no-mixed-operators": 0,
        "no-await-in-loop": 0,
        "no-plusplus": 0,
        "no-underscore-dangle": 0,
        "react/jsx-no-bind": 0,
        "react/jsx-indent": ["error", 2],
        "arrow-parens": 0, // 箭头函数入参加括号
        "comma-dangle": ["error", "never"],
        "import/no-extraneous-dependencies": 0,
        "import/order": 0,
        "import/named": 0,
        "arrow-body-style": 0,
        "global-require": 0,
        "no-restricted-syntax": [2, "WithStatement"],
      }
    };
