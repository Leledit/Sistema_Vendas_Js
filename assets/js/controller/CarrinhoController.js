import {$} from "../main.js";
import {CarrinhoView} from "../view/CarrinhoView.js";
import {InformacoesCarrinhoView} from "../view/InformacoesCarrinhoView.js";

export class CarrinhoController{
    
    listaProdutosCarrinho = [];

    constructor(){
        this.carrinhoView = new CarrinhoView(this);
        this.informacoesCarrinhoView = new InformacoesCarrinhoView();
        this.imgLimparaCarrinho = $("#imgLimparCarrinho");
        this.imgFinalizarCompras = $("#imgFinalizarCompras");
        this.adicionarEventosAoClickDasImagens();
    }

    adicionarProdutoAoCarrinho(produto){
        const posicaoProdutoNoCarrinh = this.buscarPosicaoDoProdutoNoCarrinho(produto);
        if(posicaoProdutoNoCarrinh == null){
            produto.quantidade = 1;
            this.listaProdutosCarrinho.push(produto);
        }else{
            this.listaProdutosCarrinho[posicaoProdutoNoCarrinh].quantidade += 1;
        }
        this.redereizarProdutos();
        this.atualizarInformacoesDoCarrinho();
    }

    buscarPosicaoDoProdutoNoCarrinho(produto){
        let posicaoProdutoNoCarrinho = null;
        for(let i = 0; i < this.listaProdutosCarrinho.length; i++){
            if(this.listaProdutosCarrinho[i].id == produto.id){
                posicaoProdutoNoCarrinho = i;
            }
        }
        return posicaoProdutoNoCarrinho;
    }

    redereizarProdutos(){
        this.carrinhoView.redereizarProdutos(this.listaProdutosCarrinho);
    }

    removerProdutoDoCarrinho(idProduto){
        let posicaoDoItemNoCarrinho;
        for(let i = 0; i < this.listaProdutosCarrinho.length;i++){
            if(this.listaProdutosCarrinho[i].id == idProduto){
                posicaoDoItemNoCarrinho = i;
                break;
            }
        }
        this.listaProdutosCarrinho.splice(posicaoDoItemNoCarrinho,1);
        this.redereizarProdutos();
        this.atualizarInformacoesDoCarrinho();
    }

    atualizarInformacoesDoCarrinho(){
        let valorTotalCarrinho = 0;
        let totalItensCarrinho = 0;
        this.listaProdutosCarrinho.forEach((itemLista)=>{
            valorTotalCarrinho += itemLista.quantidade * itemLista.preco;
            totalItensCarrinho += itemLista.quantidade;
        });
        this.informacoesCarrinhoView.atualizarInformacoesDoCarrinho(totalItensCarrinho,valorTotalCarrinho);
    }

    adicionarEventosAoClickDasImagens(){
        this.imgLimparaCarrinho.addEventListener("click",()=>{
            if(this.listaProdutosCarrinho.length > 0){
                this.limparItensDoCarrinho();
            }
        });
        this.imgFinalizarCompras.addEventListener("click",()=>{
            if(this.listaProdutosCarrinho.length > 0){
                alert("Comprar finalizada com sucesso");
                this.limparItensDoCarrinho();
            }
        });
    }

    limparItensDoCarrinho(){
        this.listaProdutosCarrinho = [];
        this.redereizarProdutos();
        this.atualizarInformacoesDoCarrinho();
    }
    
}