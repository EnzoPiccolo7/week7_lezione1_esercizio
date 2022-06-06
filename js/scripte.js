class anagrafe {
    constructor(nome, cognome, eta, citta) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.citta = citta;
    }
}
let botton = document.querySelector('button');


botton.onclick = function(){
    let nome = document.querySelector(' input[name="nome"]').value;
    let cognome = document.querySelector('input[name="cognome"]').value;
    let eta = document.querySelector('input[name="eta"]').value;
    let citta = document.querySelector('input[name="citta"]').value;
    var tutto = new Array(nome, cognome, eta, citta);  
     
    console.log(tutto);
    nome.value = '';
    cognome.value = '';
    eta.value = '';
    citta.value = '';
    stampa()
   

}

function stampa(){
    let rigauno = document.querySelector('.uno');
    let stamp1 = document.createElement('td');
    stamp1.innerHTML = tutto.length[0];
    rigauno.appendChild(stamp1);
}

