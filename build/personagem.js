import prompt from "prompt-sync";
//nome, energia, vida, ataque, defesa
class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
}
let goku = new Personagem("Son Goku", 100, 100, 98, 97);
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
            goku.ataque += Math.random() * 7;
            goku.energia += Math.random() * 10;
            break;
        case 2:
            goku.defesa += Math.random() * 5;
            goku.energia += Math.random() * 10;
        case 3:
            goku.energia += Math.random() * 10;
            break;
        case 4:
            goku.energia -= Math.random() * 100;
            if (goku.energia < 0) {
                console.log('Ops! Você morreu!');
            }
            break;
        case 5:
            console.log(goku);
            break;
        default:
            break;
    }
}
