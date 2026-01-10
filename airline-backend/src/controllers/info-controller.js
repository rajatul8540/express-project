const { StatusCodes } = require('http-status-codes')
const info = (req, res) => {
    return res.status(StatusCodes.OK).json(
        {
            sucess: true,
            message: 'API LIVE',
            error: {},
            data: {}
        }
    )
}
const usersList = (req, res) => {
    return res.status(StatusCodes.OK).json(
        {
            sucess: true,
            message: 'I am v2  routes',
            error: {},
            data: {}
        }
    )
}
module.exports = {
    info,
    usersList
}
