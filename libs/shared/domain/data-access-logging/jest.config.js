module.exports = {
	name: 'shared-domain-logging',
	preset: '../../../../jest.config.js',
	transform: {
		'^.+\\.[tj]sx?$': 'ts-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
	coverageDirectory:
		'../../../../coverage/libs/shared/util/data-access-logging',
};
