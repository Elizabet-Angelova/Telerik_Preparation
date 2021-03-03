const defaultInfoMsg = 'No info. ¯\\_(ツ)_/¯';
const defaultErrorMsg = 'Error!'
const defaultSuccessMsg = 'Success!'

const info = (msg) => {

    console.log(`Info: ${msg || defaultInfoMsg}`)

}

const error = (msg = msg = defaultErrorMsg) => {

    console.log(`Error: ${msg || defaultErrorMsg}`)

}

const success = (msg = defaultSuccessMsg) => {

    console.log(`Success: ${msg || defaultSuccessMsg}`)

}

module.exports = {
    info,
    error,
    success
}