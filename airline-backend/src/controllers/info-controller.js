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
module.exports = {
    info
}