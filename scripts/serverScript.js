'use strict'

module.exports = function runServer (expressInstance, serverPort) {
    expressInstance.listen(serverPort, () => {
        console.log(`Server running on: http://localhost:${serverPort}`);
    });
};