
const kmDaPercorrere = parseFloat(prompt("Inserisci il numero di chilometri da percorrere:"));

const etaPasseggero = parseInt(prompt("Inserisci l'età del passeggero:"));

// Calcola il prezzo del biglietto
const prezzoAlKm = 0.21;
let prezzoTotale = kmDaPercorrere * prezzoAlKm;

//  sconti in base all'età
if (etaPasseggero < 18) {
    // Sconto del 20% per i minorenni
    prezzoTotale *= 0.8;
} else if (etaPasseggero >= 65) {
    // Sconto del 40% per gli over 65
    prezzoTotale *= 0.6;
}

// Formatta l'output con massimo due decimali
prezzoTotale = prezzoTotale.toFixed(2);

// Mostra il risultato all'utente
alert("Il prezzo totale del viaggio è: " + prezzoTotale + " €");
 
document.getElementById('biglietto-price').innerHTML=`
<p>il prezzo da pagare ${prezzoTotale}, </p>
`

