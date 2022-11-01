import Personagem from "./personagem.js";
import prompt from "prompt-sync";
let guerreiro = new Personagem("Son Goku", 60, 100, 98, 97);
let teclado = prompt();
let option = 0;
while (option != 6) {
    console.log('======= Personagem ========');
    console.log('|1. Treinar ataque');
    console.log('|2. Treinar defesa');
    console.log('|3. Descansar');
    console.log('|4. Entrar em batalha');
    console.log('|5. Imprimir atributos');
    console.log('|6. Sair');
    console.log('===========================');
    option = +teclado('Escolha uma ação: ');
    switch (option) {
        case 1:
            guerreiro.treinarAtaque();
            console.log(guerreiro.status());
            break;
        case 2:
            guerreiro.treinarDefesa();
            console.log(guerreiro.status());
        case 3:
            guerreiro.descansar();
            console.log(guerreiro.status());
            break;
        case 4:
            guerreiro.batalhar();
            console.log(guerreiro.status());
            break;
        case 5:
            console.log(guerreiro.status());
        default:
            break;
    }
}
