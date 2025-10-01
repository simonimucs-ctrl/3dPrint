// 1. Definisci i costi nel tuo script
const COSTO_BASE_UNITARIO = 15.00; 
const COSTI_COLORE = {
    'base': 0.00,
    'rosso': 1.50,
    'nero': 2.00
};

// 2. Funzione principale per il calcolo
function calcolaPrezzo() {
    // Ottieni i valori selezionati dall'utente
    const coloreSelezionato = document.querySelector('select[name="colore"]').value;
    const quantita = parseInt(document.querySelector('input[name="quantita"]').value);

    // Gestisci il caso in cui la quantità non sia un numero valido
    if (isNaN(quantita) || quantita < 1) {
        return; // Non calcola se l'input non è corretto
    }

    // Calcolo: (Costo Base + Costo Colore) * Quantità
    const costoColore = COSTI_COLORE[coloreSelezionato] || 0;
    let prezzoTotale = (COSTO_BASE_UNITARIO + costoColore) * quantita;

    // Esempio: Sconto per quantità (logica aggiuntiva)
    if (quantita >= 5) {
        prezzoTotale *= 0.90; // Sconto del 10%
    }

    // 3. Aggiorna l'HTML con il risultato
    const prezzoFormattato = prezzoTotale.toFixed(2);
    
    // Aggiorna il campo visibile all'utente
    document.getElementById('totale_visualizzato').textContent = prezzoFormattato;
    
    // Aggiorna il campo HIDDEN che Netlify invierà a te
    document.getElementById('prezzoFinale').value = prezzoFormattato;
}

// Assicurati che il prezzo sia calcolato al caricamento della pagina
window.onload = calcolaPrezzo;
