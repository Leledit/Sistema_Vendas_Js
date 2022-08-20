import {$} from "../main.js";
export class ProdutoView{
   
    constructor(listaDeProdutosController){
        this.listaDeProdutosController = listaDeProdutosController;
        this.localExibicao = $(".container-produto-lista");
    }
   
    rederizarProdutos(listaDeProdutos){
        let listaDeDesignerDosProdutos = "";
        listaDeProdutos.forEach(produto => {
            listaDeDesignerDosProdutos += this.criandoDesignerDoProduto(produto);
        });
        this.localExibicao.innerHTML = listaDeDesignerDosProdutos;
        this.adicionarEventoAoBotaoDeAdicionarAoCarrinho();
    }
   
    criandoDesignerDoProduto(produto){
        let designerProduto = `
            <div class="container-produto-item" id="${produto.id}">
                <p class="item-nome"><strong>Nome: </strong>${produto.nome}</p>
                <p class="item-preco"><strong>Preço: </strong>${produto.preco}</p>
                <p class="item-descricao"><strong>Descrição: </strong>${produto.descricao}</p>
                <button class="buttonAdicionarCarrinho" >Adicionar ao carrinho</button>
            </div>`
        return designerProduto;
    }

    adicionarEventoAoBotaoDeAdicionarAoCarrinho(){
        const listaDeBotoesDosProdutos = $(".buttonAdicionarCarrinho","all");
        listaDeBotoesDosProdutos.forEach((botao)=>{
            botao.addEventListener("click",(event)=>{
                this.listaDeProdutosController.adicionarProdutoNoCarrinho(event.target.parentNode.id);
            });
        });
    }
}