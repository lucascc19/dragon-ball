import prompt from "prompt-sync";

//nome, energia, vida, ataque, defesa
class Personagem {
    nome: string = ""; 
    energia: number = 0; 
    vida: number = 0; 
    ataque: number = 0; 
    defesa: number = 0;
}

let person: Personagem = new Personagem();

person.nome = "Son Goku";
person.ataque = 98;
person.defesa = 97;
person.energia = 95;
person.vida = 100;

let teclado = prompt();
let option: number = 0;
while(option != 6){
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
            person.ataque += Math.random() * 7;
            person.energia -= Math.random() * 10;
            if(person.energia < 0){
                console.log('Ops! Você morreu!');
            }else{
                if(person.defesa > 100){
                    person.defesa = 0;
                }
            }
            console.log("--- Guerreiro ---");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        case 2:
            person.defesa += Math.random() * 5;
            person.energia -= Math.random() * 10;
            if(person.energia < 0){
                console.log('Ops! Você morreu!');
            }else{
                if(person.defesa > 100){
                    person.defesa = 0;
                }
            }
            console.log("--- Guerreiro ---");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
        case 3:
            person.energia += Math.random() * 10;
            if(person.energia > 100){
                person.energia = 100;
            }
            console.log("--- Guerreiro ---");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        case 4:
            person.energia -= Math.random() * 10;
            if(person.energia < 0){
                console.log('Ops! Você morreu!');
            }
            console.log("--- Guerreiro ---");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        case 5:
            console.log("--- Guerreiro ---");
            console.log("Nome: ", person.nome);
            console.log("Energia: ", person.energia.toFixed(1));
            console.log("Ataque: ", person.ataque.toFixed(1));
            console.log("Defesa: ", person.defesa.toFixed(1));
            break;
        default:
            break;
    }
}