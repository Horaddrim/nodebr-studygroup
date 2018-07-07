const Person = require('./../../entities/person');

module.exports = function(req, res) {
    res.send(new Person());
}