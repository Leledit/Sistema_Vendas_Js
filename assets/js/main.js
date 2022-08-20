import {ListaDeProdutosController} from './controller/ListaDeProdutosController.js';
import {FormularioController} from './controller/FormularioController.js';

export function $(query, tipo = "one") {
    if (tipo == "all") {
        return document.querySelectorAll(query);
    } else {
        return document.querySelector(query);
    }
} 

const controladorListaDeProdutos = new ListaDeProdutosController();
const controladorFormulario = new FormularioController(controladorListaDeProdutos);
