interface Smartphone {
  credito: number;
  numeroChiamate: number; //minuti effettuati

  ricarica(costoRicarica: number): void; //aggiunge credito con un parametro che rappresenta l'ammontare della ricarica
  chiama404(): number; //restituisce il credito residuo
  chiamata(minuti: number): void; //prende come parametro il numero di minuti passati in chiamata e aggiorna il credito disponibile
  getNumeroChiamate(): number; //restituisce i minuti passati in chiamata
  azzeraChiamate(): void; //azzera la variabile delle chiamate
}

class User implements Smartphone {
  nome: string;
  cognome: string;
  credito: number = 0;
  numeroChiamate: number = 0;
  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }
  ricarica(costoRicarica: number): void {
    //il metodo ricarica sommerà this.credito alla ricarica effettuata
    this.credito += costoRicarica;
  }
  chiama404(): number {
    return this.credito;
  }
  chiamata(minuti: number): void {
    //il parametro saranno i minuti trascorsi che moltiplicati *20 si sottrarranno al credito totale, incremento di 1 le chiamate effettuate
    if (this.credito - minuti * 0.2 > 0) {
      this.credito -= minuti * 0.2;
      this.numeroChiamate += 1;
    } else {
      console.log("ricarica fratè");
    }
  }
  getNumeroChiamate() {
    return this.numeroChiamate;
  }
  azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

const myUser = new User("Rik", "San");

myUser.ricarica(10); //faccio ricarica di 10 euri
console.log(myUser.chiama404()); //controllo il credito --> 10€
myUser.chiamata(20); //faccio una chiamata di 20 minuti
console.log(myUser.chiama404()); //controllo il credito   --> 6€
myUser.chiamata(10); //faccio una chiamata di 10 minuti
console.log(myUser.chiama404()); //controllo il credito   --> 4€
console.log(myUser.getNumeroChiamate()); //controllo numero chiamate --> sono 2
myUser.azzeraChiamate(); //azzero il numero di chiamate
console.log(myUser.getNumeroChiamate()); //e ricontrollo
myUser.ricarica(5000); //ricarico 5000€
myUser.chiamata(20000); //faccio una chiamata di 20000 minuti
console.log(myUser.chiama404()); //controllo il credito   -->
console.log(myUser.getNumeroChiamate()); //e ricontrollo
myUser.chiamata(20000); //faccio un'altra chiamata di 20000 minuti e mi torna il log che devo ricaricare
