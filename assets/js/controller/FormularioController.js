import {$} from "../main.js";
import{Produto} from "../model/Produto.js";
export class FormularioController{

    constructor(controladorListaProdutos){
        this.controladorListaDeProdutos = controladorListaProdutos;
        this.buttonCadastrar = $("#buttonCadastrar");
        this.campNomeProduto = $("#campNome");
        this.campPrecoProduto = $("#campPreco");
        this.campDescricaoProduto = $("#campDescrip");
        this.adicionandoEventoAoBotao();
        
    }

    adicionandoEventoAoBotao(){
        this.buttonCadastrar.addEventListener("click",(event)=>{
            event.preventDefault();
            const nome = this.campNomeProduto.value;
            const preco = parseFloat(this.campPrecoProduto.value);
            const descricao = this.campDescricaoProduto.value;
            this.controladorListaDeProdutos.adicionarProdutoNaListaDeProdutos(new Produto(nome,preco,descricao));
            this.limparCamposDoFormulario();
        })
    }

    limparCamposDoFormulario(){
        this.campNomeProduto.value = "";
        this.campPrecoProduto.value = "";
        this.campDescricaoProduto.value = "";
    }
}