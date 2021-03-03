const {errorHandler} = require('./error-handler1')
const logger = require('./logger1')

// // const {info, success} = logger
// const info = logger.info
// info('string')

const funcy = (str) => {
    let result =  str.split('').join('★')
    return result
}

errorHandler(funcy, logger, 'some string')