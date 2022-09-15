//nome, energia, vida, ataque, defesa
export default class Personagem {
    constructor(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    status() {
        return ("-- Guerreiro -- \n" +
            "Nome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1)));
    }
    treinarAtaque() {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        this.verificaDefesa();
        if (this.ataque > 100)
            this.ataque = 100;
    }
    treinarDefesa() {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        this.verificaDefesa();
    }
    descansar() {
        this.energia += Math.random() * 10;
        if (this.energia > 100) {
            this.energia = 100;
        }
    }
    verificaDefesa() {
        if (this.defesa > 100) {
            this.defesa = 100;
        }
    }
    batalhar() {
        this.energia -= Math.random() * 10;
        this.isDead();
        return this.energia;
    }
    isDead() {
        if (this.energia < 0) {
            console.log('Ops! Morreu!');
        }
    }
}
