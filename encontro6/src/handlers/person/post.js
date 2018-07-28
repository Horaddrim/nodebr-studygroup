module.exports = async (req, res) => {
    const {db} = req;

    const dados = req.body;
    
    const newUser = await db.users.insertOne(dados);

    res.status(201);
    
    res.send(newUser);
};