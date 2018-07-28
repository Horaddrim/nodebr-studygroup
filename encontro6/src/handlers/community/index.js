
async function getHandler(req, res) {
    req.logger('Recebi uma conexão!');
    const {db} = req;

    const resultados = await db.community.find({}).toArray();

    res.send(resultados);
};

module.exports = {
    getHandler,
};