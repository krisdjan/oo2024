interface Kuju {
    pindala(): number;
    umbermoot(): number;
}

class Ruut implements Kuju {
    private kuljePikkus:number;

    constructor(kuljePikkus: number) {
        this.kuljePikkus = kuljePikkus;
    }

    pindala(): number {
        return this.kuljePikkus * this.kuljePikkus;
    }
    
    umbermoot(): number {
        return 4 * this.kuljePikkus;
    }
}

class Ristkulik implements Kuju {
    private aKulg: number;
    private bKulg: number;

    constructor(aKulg:number, bKulg:number) {
        this.aKulg = aKulg;
        this.bKulg = bKulg;
    }

    pindala(): number {
        return Math.round(this.aKulg * this.bKulg);
    }

    umbermoot(): number {
        return Math.round(2 * (this.aKulg + this.bKulg));
    }
}

class Ring implements Kuju {
    private raadius: number;
    
    constructor(raadius:number) {
        this.raadius = raadius;
    }

    pindala(): number {
        return Math.round(Math.PI * this.raadius * this.raadius);
    }

    umbermoot(): number {
        return Math.round(2 * Math.PI * this.raadius);
    }
}


let rõngas = new Ring(30);
let jalkastaadion = new Ristkulik(10000, 20000);

console.log(rõngas.pindala());
console.log(jalkastaadion.umbermoot());


