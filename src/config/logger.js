const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
    level: 'info',
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                format.simple(),
            )
        })
    ]
});