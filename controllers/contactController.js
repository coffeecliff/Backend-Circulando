const Contact = require('../models/contact');

exports.createContact = async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ error: 'Email e mensagem são obrigatórios.' });
    }

    const contact = await Contact.create({ email, message });
    return res.status(201).json(contact);
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      const erros = error.errors.map(e => e.message);
      return res.status(400).json({ errors: erros });
    }
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
};

exports.listContact = async (req, res) => {
  try {
    const contact = await Contact.findAll({
      order: [['createdAt', 'DESC']],
    });
    return res.json(contact);
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao listar contatos.' });
  }
};