const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info => `[${info.timestamp}] | ${info.level.toLocaleUpperCase()} | ${info.message}`)
    ),
    transports: [
        new transports.Console({level: 'debug'}),
    ]
});