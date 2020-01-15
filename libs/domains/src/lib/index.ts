/**
 * Helpers & utils
 */
import { initAPI } from './utils/api.helpers';

export * from './utils/action.helpers';

/**
 * Default system stuff
 */
export * from './modules/_system';
export * from './modules/_auth';
initAPI();

/**
 * Domain specific modules
 */
export * from './modules/client';
export * from './modules/patient';
