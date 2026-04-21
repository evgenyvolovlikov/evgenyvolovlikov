import eslint from '@eslint/js'
import angular from 'angular-eslint'
import prettierConfig from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

export default tseslint.config(
	{
		ignores: [
			'build',
			'.angular',
			'.cache',
			'out-tsc/',
			'node_modules',
			'.vscode',
			'pnpm-lock.yaml'
		]
	},
	{
		files: ['**/*.ts'],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.strict,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended,
			prettierConfig
		],
		processor: angular.processInlineTemplates,
		rules: {
			semi: ['error', 'never'],

			'@typescript-eslint/no-explicit-any': 'warn',

			'@typescript-eslint/no-extraneous-class': [
				'error',
				{allowWithDecorator: true, allowStaticOnly: true}
			],

			'@angular-eslint/directive-selector': [
				'error',
				{type: 'attribute', prefix: 'app', style: 'camelCase'}
			],
			'@angular-eslint/component-selector': [
				'error',
				{type: 'element', prefix: 'app', style: 'kebab-case'}
			],

			'@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
			'@angular-eslint/no-empty-lifecycle-method': 'warn'
		}
	},
	{
		files: ['**/*.html'],
		extends: [
			...(angular.configs.templateRecommended as any[]),
			...(angular.configs.templateAccessibility as any[]),
			prettierConfig as any
		],
		rules: {
			'@angular-eslint/template/no-negated-async': 'error',
			'@angular-eslint/template/no-duplicate-attributes': 'error'
		}
	}
)
