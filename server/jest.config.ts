import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testMatch: ["**/tests/**/*.(test|integration).ts"]
};
export default config;
