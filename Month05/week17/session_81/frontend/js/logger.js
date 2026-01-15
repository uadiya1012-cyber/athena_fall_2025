// logger.js
// Module бүр НЭГХЭН default export-той байж болно

class Logger {
    log(message) {
        console.log(`[LOG]: ${message}`);
    }

    error(message) {
        console.error(`[ERROR]: ${message}`);
    }

    warn(message) {
        console.warn(`[WARN]: ${message}`);
    }
}

export const speed_of_light = 299792458; // meters per second
export default Logger;
