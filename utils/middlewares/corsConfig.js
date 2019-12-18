const { config } = require('../../configs/config');

const corsConfig = { };

corsConfig.setCorsConfig = () => {
    let whiteDomainList = [config.corsProduction, config.corsDevelopment];
    let corsOptionsDelegate = (req, callback) => {
        let corsOptions;
        if (whiteDomainList.indexOf(req.header('Origin')) !== 1) {
            corsOptions = { origin: true };
        } else {
            corsOptions = { origin: false };
        }

        callback(null, corsOptions);
    };

    return corsOptionsDelegate;
};

module.exports = corsConfig;