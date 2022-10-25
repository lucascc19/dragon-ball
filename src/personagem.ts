//nome, energia, vida, ataque, defesa
export default class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number    
    ) {}

    status(): string {
        return (
            "-- Guerreiro -- \n" +
            "Nome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +   
            ("\nDefesa: " + this.defesa.toFixed(1))
        );
    }
    
    treinarAtaque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        this.verificaDefesa();
        if(this.ataque > 100)
            this.ataque = 100;
    }

    treinarDefesa(): void {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        this.verificaDefesa();
    }

    
    descansar(): void {
        this.energia += Math.random() * 10;
        if(this.energia > 100){
            this.energia = 100;
        }
    }
    
    verificaDefesa(): void {
        if(this.defesa > 100){
            this.defesa = 100;
        }
    }
    
    batalhar(): number {
        this.energia -= Math.random() * 10;
        this.guerreiroMorto();
        return this.energia;
    }

<<<<<<< HEAD
    option = +teclado('Escolha uma ação: ');

    switch (option){
        case 1:
            person.ataque += Math.random() * 7;
            person.energia -= Math.random() * 10;
            if(person.energia < 0){
                console.log('Ops! Você morreu!');
            }else{
                if(person.defesa > 100){
                    person.defesa = 100;
                }else{
                    if(person.ataque > 100){
                        person.ataque = 100;
                    }
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
                    person.defesa = 100;
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
=======
    guerreiroMorto(): void {
        if(this.energia < 0){
            console.log('Ops! Morreu!');
        }
>>>>>>> beta
    }
}