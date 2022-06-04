const status = require("../../const/statusCode");

const healthCheck = async (req, res) => {

    const health = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    
    try {
        res.status(status.OK).json(health);
    } catch (error) {
        health.message = error;
        res.status(status.SERVICE_UNAVAILABLE).json(health);
    }
}

module.exports = healthCheck;