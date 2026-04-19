import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import angular from 'angular-eslint'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export default tseslint.config(
	{
		ignores: [
			'build',
			'.angular',
			'.cache',
			'out-tsc/',
			'node_modules',
			'.vscode',
			'.husky',
			'pnpm-lock.yaml',
			'*.log'
		]
	},
	{
		plugins: {
			prettier: prettierPlugin
		}
	},
	{
		files: ['**/*.ts'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
			prettierConfig
		],
		processor: angular.processInlineTemplates,
		rules: {
			'prettier/prettier': 'error',

			'no-multiple-empty-lines': [
				'error',
				{
					max: 2,
					maxEOF: 0,
					maxBOF: 0
				}
			],

			'@angular-eslint/directive-selector': [
				'error',
				{
					type: 'attribute',
					prefix: 'app',
					style: 'camelCase'
				}
			],
			'@angular-eslint/component-selector': [
				'error',
				{
					type: 'element',
					prefix: 'app',
					style: 'kebab-case'
				}
			],
			semi: ['error', 'never']
		}
	},
	{
		files: ['**/*.html'],
		extends: [
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...(angular.configs.templateRecommended as any[]),
			...angular.configs.templateAccessibility,
			prettierConfig
		],
		rules: {
			'prettier/prettier': ['error', {parser: 'angular'}],
			'no-multiple-empty-lines': ['error', {max: 2}]
		}
	}
)
