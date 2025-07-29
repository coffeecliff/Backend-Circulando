// Importa o tipo de dados do Sequelize
const { text } = require('express');
const { DataTypes, TEXT } = require('sequelize');
 
// Importa a instância configurada do Sequelize (conexão com o banco de dados)
const sequelize = require('../config/db');
 
// Define o modelo de Usuário (User)
const Contact = sequelize.define('contact', {
  // Campo ID: chave primária, número inteiro e autoincrementável
  id: {
    type: DataTypes.INTEGER,       // Tipo número inteiro
    autoIncrement: true,           // Será incrementado automaticamente
    primaryKey: true,              // Define como chave primária (PK)
  },

  // Campo e-mail do usuário
  email: {
    type: DataTypes.STRING,        // Texto simples
    allowNull: false,              // Obrigatório                  // Deve ser único no banco (não permite dois iguais)
  },

  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
 
}, {
  // Configurações adicionais do modelo
 
  tableName: 'contact',              // Nome da tabela no banco de dados (evita plural automático)
 
  timestamps: true,                // Cria automaticamente os campos createdAt e updatedAt
});
 
// Exporta o modelo para ser utilizado em outras partes da aplicação
module.exports = Contact;