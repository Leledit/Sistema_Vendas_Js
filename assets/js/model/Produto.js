export class Produto{
    id;
    nome;
    preco;
    descricao;
    quantidade;

    constructor(nome,preco,descricao){
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.quantidade = 1;
        this.id = uuid.v1();
    }
}