const healthCheck = async (req, res) => {

    const health = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
    };
    
    try {
        res.status(200).json(health);
    } catch (error) {
        health.message = error;
        res.status(503).json(health);
    }
}

module.exports = healthCheck;