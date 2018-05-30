const express = require('express');
const { config } = require('dotenv');

const app = express();

app.get('/nodebr', (req, res) => {
    res.send({ communityName: 'NodeBR', data: dado });
});


config();

app.listen(process.env.PORT, () => console.log('Começou..'));


