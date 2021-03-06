const stellar = require('./components/stellar');
const token = require('./components/token');
const server = require('./components/server');
const db = require('./components/db');
const aws = require('./components/aws');
const gCaptcha = require('./components/gCaptcha');
const idm = require('./components/idm');
const mailgun = require('./components/mailgun');

/*      outcome/
 * Load the configuration for the various components from the
 * environment
 */
module.exports = {
    stellar,
    token,
    server,
    db,
    aws,
    gCaptcha,
    idm,
    mailgun
};
