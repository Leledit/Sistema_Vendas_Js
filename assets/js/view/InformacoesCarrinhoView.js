import {$} from "../main.js";
export class InformacoesCarrinhoView{

    constructor(){
        this.localDeExibicaoQtdItens = $("#qtdItensCarrinho");
        this.localDeExibicaoValorTotal = $("#valorTotaCarrinho");
    }

    atualizarInformacoesDoCarrinho(qtdItens,valorTotal){                         
        this.localDeExibicaoQtdItens.innerHTML = "<strong>Itens: </strong>"+qtdItens;
        this.localDeExibicaoValorTotal.innerHTML = "<strong>Total: </strong>"+valorTotal;
    }
}