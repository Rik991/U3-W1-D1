var User = /** @class */ (function () {
    function User(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    User.prototype.ricarica = function (costoRicarica) {
        //il metodo ricarica sommerà this.credito alla ricarica effettuata
        this.credito += costoRicarica;
    };
    User.prototype.chiama404 = function () {
        return this.credito;
    };
    User.prototype.chiamata = function (minuti) {
        //il parametro saranno i minuti trascorsi che moltiplicati *20 si sottrarranno al credito totale, incremento di 1 le chiamate effettuate
        if (this.credito - minuti * 0.2 > 0) {
            this.credito -= minuti * 0.2;
            this.numeroChiamate += 1;
        }
        else {
            console.log("ricarica fratè");
        }
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var myUser = new User("Rik", "San");
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
myUser.chiamata(20000); //faccio una chiamata di 20000 minuti
