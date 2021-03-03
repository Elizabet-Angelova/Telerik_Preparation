const errorHandler = (fn, logger, msg) => {

    if (typeof fn === 'function') {
        try {
            const result = fn(msg);
            logger.success(result);
        } catch (error) {
            logger.error(`${msg} is not a string, dummy!`);
        } finally {
            logger.info()
        }


    }
}

module.exports.errorHandler = errorHandler