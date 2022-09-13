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
while (option != 4) {
    console.log('======= Personagem ========');
    console.log('|1. Treinar ataque');
    console.log('|2. Treinar defesa');
    console.log('|3. Imprimir atributos');
    console.log('|4. Sair');
    console.log('===========================');
    option = +teclado('Escolha uma ação: ');
    switch (option) {
        case 1:
            goku.ataque += 2;
            break;
        case 2:
            goku.defesa += 2;
        case 3:
            console.log(goku);
        default:
            break;
    }
}
