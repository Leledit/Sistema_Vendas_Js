import {$} from "../main.js";
export class CarrinhoView{
 
    constructor(carrinhoController){
        this.localExibicao = $(".container-carrinho-itens");
        this.carrinhoController = carrinhoController;
    } 

    redereizarProdutos(listaDeProdutos){
        let listaDeDesignerDosProdutos = "";
        listaDeProdutos.forEach(produto => {
            listaDeDesignerDosProdutos = listaDeDesignerDosProdutos + this.criandoDesignerDoProduto(produto);
        });
        this.localExibicao.innerHTML = listaDeDesignerDosProdutos;
        this.adicionarEventoAoBotaoRemover();
    }

    criandoDesignerDoProduto(produto){
        let designerProduto = `
            <div class="container-carrinho-item" id="${produto.id}">
                <p class="item-nome"><strong>Nome: </strong>${produto.nome}</p>
                <div class="container-carrinho-item-two">
                    <p class="item-preco"><strong>Preco: </strong>${produto.preco}</p>
                    <p class="item-quantidade"><strong>QTD: </strong>${produto.quantidade}</p>
                </div>
                <p class="item-descrica"><strong>Descrição: </strong>${produto.descricao}</p>
                <button class="buttonRemoverCarrinho">Remover</button>
            </div>`
        return designerProduto;
    }

    adicionarEventoAoBotaoRemover(){
        const listaDeBotoesDosProdutos = $(".buttonRemoverCarrinho","all");

        listaDeBotoesDosProdutos.forEach((botao)=>{
            botao.addEventListener("click",(event)=>{
                this.carrinhoController.removerProdutoDoCarrinho();
            });
        })
    }
}