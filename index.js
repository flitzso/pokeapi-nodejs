const api = require("./api");
const express = require("express");

const server = express();

server.use(express.json());

server.listen(8000);

server.get('/', (req, res) => {
    return res.send({message: "Para acessar a api use /pokemon/numerodesejado"})
});

server.get('/pokemon/:id', async (req, res) =>{
    const { id } = req.params;
    try {
        const { data } = await api.get(`pokemon/${id}`);

      return res.send({name: data.name});
    } catch (error) {
      res.send({ error: error.message });
    }
});