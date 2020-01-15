import { SystemMessage, SystemState, SystemStatus } from './system.contracts';

/**
 * Get the portion of the state we care about specifically
 * @param state
 */
const getSystemState = (state: any): SystemState => state._system || {};

/**
 * Returns boolean value indicating loading status of the system
 * @param state
 */

const isLoading = (state: any): boolean => getSystemState(state).status === SystemStatus.loading;
/**
 * Returns last system message dispatched and active
 * @param state
 */

const lastMessage = (state: any): SystemMessage | null => getSystemState(state).lastMessage;

/**
 * Returns last system error dispatched and active
 * @param state
 */
const lastError = (state: any): SystemMessage | null => {
    const msg = lastMessage(state);
    return msg && msg.severity >= 2 ? msg : null;
};

/**
 * System selectors object
 */
export const SystemSelectors = {
    isLoading,
    lastMessage,
    lastError
};
