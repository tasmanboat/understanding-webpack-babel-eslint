module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // "no-unused-vars": "off", // or inline use as such: // eslint-disable-line no-unused-vars

        // // when using eslint-config-airbnb as "extends":[ 'airbnb' ]
        // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        // "react/jsx-one-expression-per-line": "off",
        // "no-multiple-empty-lines": "off",
    },


    "settings": {
        "react": {
            "version": "detect", // eslint react cliche  https://github.com/yannickcr/eslint-plugin-react/issues/1955
        },
    },
};
