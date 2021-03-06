const connection = require("../database/connection");
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
	async index (req, res) { 
			const ongs = await connection('ongs').select('*');
		
			return res.json(ongs);
	},
	
  async create(req, res) {
    //.query pega os parametros apos '?'
    //.params pega o 'id' geralmente em .../id e a rota deve ser '/users/:id'
    //.body pega os parametros pelo body da requisicao

    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.json({ id });
  },
};
