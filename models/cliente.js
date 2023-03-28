const mongoose = require('mongoose')

const Cliente = mongoose.Schema ({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    dtNascimento: {
        type: Date,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    nuCarteiraMotorista: {
        type: Number,
        required: true
    },
    anoVencimentoCarteira: {
        type: Number,
        required: true
    },
    fotoCarteira: {
        data: Buffer,
        contentType: String,
        required: false
    }

}, {versionKey: false });

module.exports = mongoose.model('Cliente', Cliente);