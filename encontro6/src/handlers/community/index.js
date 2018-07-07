const Community = require('./../../entities/community');

module.exports = function(req, res) {
    res.send(new Community());
};