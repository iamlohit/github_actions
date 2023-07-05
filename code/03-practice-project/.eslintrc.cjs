module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true  // add this line to fix "'describe' is not defined" and similar errors
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 2022,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/react-in-jsx-scope": "off"  // add this line to fix "'React' must be in scope when using JSX" error
    },
    "settings": {
        "react": {
            "version": "detect"  // add this line to fix "React version not specified in eslint-plugin-react settings" warning
        }
    }
};
