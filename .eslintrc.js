module.exports = {
    "hooks": {
        "before:init": ["npm run lint"],
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
    }
};
