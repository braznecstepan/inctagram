import {dirname} from "path";
import {fileURLToPath} from "url";
import {FlatCompat} from "@eslint/eslintrc";
import js from '@eslint/js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended
});

const eslintConfig = [
    ...compat.config({
        extends: [
            "next/core-web-vitals",
            "next/typescript",
            "@it-incubator/eslint-config",
            "prettier"
        ],
        rules: {
            'no-console': ['warn', {allow: ['warn', 'error']}],
            'no-duplicate-imports': 'off',
            'perfectionist/sort-imports': 'off'
        }
    }),
];

export default eslintConfig;
