import{CarrinhoController} from "./CarrinhoController.js";
import{ProdutoView} from "../view/ProdutoView.js";
import{Produto} from "../model/Produto.js";

export class ListaDeProdutosController{
  
    listaDeProdutos = [];

    constructor(){
        this.carrinhoController = new CarrinhoController();
        this.produtoView = new ProdutoView(this);
        this.prepararProdutosIniciaisParaListaDeProdutos();
    }

   adicionarProdutoNaListaDeProdutos(produto){
        this.listaDeProdutos.push(produto);
        this.produtoView.rederizarProdutos(this.listaDeProdutos);
    }

    prepararProdutosIniciaisParaListaDeProdutos(){
        this.adicionarProdutoNaListaDeProdutos(new Produto("Piza de queijo",30,"uma deliciosa piza de queijo"));
        this.adicionarProdutoNaListaDeProdutos(new Produto("Pizza de calabreza",35,"uma deliciosa piza de calabreza"));
        this.adicionarProdutoNaListaDeProdutos(new Produto("Pizza de frango",40,"uma deliciosa piza de frango"));
    }

    adicionarProdutoNoCarrinho(idProduto){
        this.listaDeProdutos.forEach((produto)=>{
            if(produto.id == idProduto){
                this.carrinhoController.adicionarProdutoAoCarrinho(produto);
            }
        });
    }
    
    
}

