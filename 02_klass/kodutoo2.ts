class Pastapliiats{
  aktiivsus: boolean;
  tindiVarv: string;
  brand: string;

  constructor (tindiVarv:string, brand:string) {
    this.tindiVarv = tindiVarv;
    this.brand = brand;
    this.aktiivsus = false;
  }

  pastakasAktiivne():void {
    this.aktiivsus = true;
  }

  pastakasMitteAktiivne():void {
    this.aktiivsus = false;
  }
}


let sininePastakas = new Pastapliiats("sinine", "Pilot");
let punanePastakas = new Pastapliiats("punane", "Bic");

console.log(sininePastakas.tindiVarv);  //prindib: sinine
console.log(punanePastakas.tindiVarv);  //prindib: punane

console.log(sininePastakas.aktiivsus);  //prindib: false
sininePastakas.pastakasAktiivne();
console.log(sininePastakas.aktiivsus);  //prindib: true
