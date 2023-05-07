// creo costante box e lo collego alla clase html
const box = document.querySelector(".box");

// ciclo 90 volte

for (let i = 1; i <= 90; i++) {
	// creo "element" che e' un div (90 volte)
	const element = document.createElement("div");
	// attribuisco a "element" la classe "numeri"
	element.classList.add("numeri");
	// stampo dentro agli element il numero (del ciclo for)
	element.innerText = i;
	// inserisco all'interno di box gli "element"
	box.append(element);

	// AL CLICK SUI NUMERI
	element.addEventListener("click", function () {
		// se "element" ha come classe "numeri-click"
		if (element.classList.contains("numeri-click")) {
			// "numeri-click" viene rimosso
			element.classList.remove("numeri-click");
			// se invece non contiene la classe "numeri-click"
		} else {
			// la classe "numeri-click" viene aggiunta a "element"
			element.classList.add("numeri-click");
		}
	});
}
// al rilascio del pulsante avviene questa funzione
document.addEventListener("keyup", function (event) {
	// se viene rilasciata barra spazio
	if (event.code === "Space") {
		// creo variabile "testo" e gli assegno l'id "#testo"
		let testo = document.querySelector("#testo");
		// creo la costante "numeroRandom" che e' un num casuale da 1 a 90
		let numeroRandom = Math.floor(Math.random() * 90) + 1;
		// stampo in console il numero estratto
		console.log(numeroRandom);
		// creo costante "item" e gli attribuisco il valore di "numeroRandom"
		const item = document.querySelector(
			`.box .numeri:nth-child(${numeroRandom})`
		);
		// se "item" contiene la classe "numeri-rossi" (gia' estratto)
		// OPPURE
		// se "item" contiene la classe "numeri-viola" (gia' estratto e azzeccato)
		if (
			item.classList.contains("numeri-rossi") ||
			item.classList.contains("numeri-viola")
		) {
			//QUI POTREI IMPLEMENTARE PER FAR RIESTRARRE QUANDO UN NUMERO E' GIA' USCITO
			// "testo" non stampa nulla.
			testo.innerHTML = ``;
			// alert("Numero già estratto:" + " " + numeroRandom); // <-- QUESTO ALERT E' INVASIVO
		} else {
			// se invece il numero non e' mai uscito e non e' stato scelto dal giocatore, ad "item" viene aggiunta la classe "numeri-rossi"
			item.classList.add("numeri-rossi");
		}
		// se "item" contiene "numeri-click" (Quindi e' stata scelta dal giocatore)
		if (item.classList.contains("numeri-click")) {
			//&& item.classList.contains("numeri-rossi")) <-- CODICE DA RIVEDERE (probabilmente inutile)
			// ad "item" viene aggiunta la classe "numeri-viola"
			item.classList.add("numeri-viola");
		}

		testo.innerHTML = ``; // <-- questo resetta il messaggio dopo l'estrazione
		// Questo annuncia il numero estratto
		testo.innerHTML += `Numero estratto: ${numeroRandom}  `;
	}
});
