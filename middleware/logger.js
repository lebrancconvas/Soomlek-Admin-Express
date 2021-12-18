const logger = (req, res, next) => {
    console.log(`Test Middleware.`);
    next();
}

module.exports = logger;