module.exports = {
	'extends': [
		'eslint:recommended',
	],
	'root': true,
	'parser': 'babel-eslint',
	'env': {
		'es6': true,
		'node': true,
		'browser': true,
		'jest': true,
	},
	'rules': {
		'indent': [
			'error',
			'tab',
			{
				'MemberExpression': 0,
			},
		],
		'strict': [
			'error',
			'safe',
		],
		'semi': [
			'error',
			'always',
		],
		'curly': [
			'error',
			'all',
		],
		'eqeqeq': [
			'error',
			'always',
		],
		'quotes': [
			'error',
			'single',
		],
		'quote-props': [
			'error',
			'always',
		],
		'arrow-body-style': [
			'error',
			'always',
		],
		'arrow-parens': [
			'error',
			'always',
		],
		'array-bracket-newline': [
			'error',
			{
				'minItems': 1,
			},
		],
		'array-element-newline': [
			'error',
			'always',
		],
		'object-curly-newline': [
			'error',
			{
				'minProperties': 1,
			},
		],
		'object-property-newline': [
			'error',
		],
		'brace-style': [
			'error',
			'stroustrup',
		],
		'comma-dangle': [
			'error',
			'always',
		],
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true,
			},
		],
		'func-call-spacing': [
			'error',
			'never',
		],
		'newline-per-chained-call': [
			'error',
			{
				'ignoreChainWithDepth': 1,
			},
		],
		'no-multiple-empty-lines': [
			'error',
			{
				'max': 1,
				'maxBOF': 0,
			},
		],
		'eol-last': [
			'error',
		],
		'no-trailing-spaces': [
			'error',
		],
		'keyword-spacing': [
			'error',
			{
				'before': false,
				'after': false,
				'overrides': {
					'const': {
						'after': true,
					},
					'import': {
						'after': true,
					},
					'from': {
						'before': true,
						'after': true,
					},
					'else': {
						'after': true,
					},
					'return': {
						'after': true,
					},
					'try': {
						'after': true,
					},
					'throw': {
						'after': true,
					},
					'as': {
						'before': true,
					},
				},
			},
		],
		'linebreak-style': [
			'error',
			'unix',
		],
		'unicode-bom': [
			'error',
			'never',
		],
		'no-console': [
			'off',
		],
		'no-unused-vars': [
			'off',
		],
		'no-case-declarations': [
			'off',
		],
	},
};
