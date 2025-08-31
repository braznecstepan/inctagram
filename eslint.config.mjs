// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

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

const eslintConfig = [...compat.config({
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
}), ...storybook.configs["flat/recommended"], ...storybook.configs["flat/recommended"]];

export default eslintConfig;
