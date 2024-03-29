const Promocao = require('../models/promocao')

module.exports = class PromocaoController {

    static async inserir(req, res) {
        console.log(req.body);

        const promocao = new Promocao ({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dtValidade: req.body.dtValidade
        });
        
        promocao.save(promocao).then(data => {
            res.send(data);
        }).catch(error => {
            res.status(500).send({ mensagem: error.message || `Erro ao tentar inserir os dados do promocao: ${promocao}.`});
        })

    }

    static async enviarPromocao(req, res) {
        const { id } = req.query;

        const promocao = await Promocao.findById(id);
        console.log(promocao);

        const clientes = await Cliente.find({});
        console.log(clientes);

        //TODO: ENVIAR E-MAIL PARA OS CLIENTES

        res.json({'promoção': promocao, 'clientes': clientes});
    }
}