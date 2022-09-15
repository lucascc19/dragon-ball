import Personagem from "./personagem.js";
import prompt from "prompt-sync";

let person: Personagem = new Personagem("Son Goku", 60, 100, 98, 97);

let teclado = prompt();
let option: number = 0;

while(option != 6 || person.isDead()){
    console.log('======= Personagem ========');
    console.log('|1. Treinar ataque');
    console.log('|2. Treinar defesa');
    console.log('|3. Descansar');
    console.log('|4. Entrar em batalha');
    console.log('|5. Imprimir atributos');
    console.log('|6. Sair');
    console.log('===========================');

    option = +teclado('Escolha uma ação: ');

    switch (option){
        case 1:
            person.treinarAtaque();
            console.log(person.status());
            break;
        case 2:
            person.treinarDefesa();
            console.log(person.status());
        case 3:
            person.descansar();
            console.log(person.status());
            break;
        case 4:
            let rest: number = person.batalhar();
            console.log(`Energia perdida ${rest}`);
            console.log(person.status());
            break;
        case 5:
            console.log(person.status());
        default:
            break;
    }
}
console.log('Ops! Morreu!');
