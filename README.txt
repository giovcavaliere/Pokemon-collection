LA COLLEZIONE DI [NOME] v1.3

Scanner reale prototipo:
- OCR nel browser con Tesseract.js
- ricerca carta su TCGdex
- lettura numero carta quando possibile
- scelta tra più corrispondenze
- reset completo tra una scansione e la successiva
- fallback locale per Pala Scavabuche 074/088 e Mewtwo V 030/078
- nessuna API key richiesta

Richiede Internet durante la scansione.
Per una demo più affidabile usare foto dritte, ben illuminate e con poco riflesso foil.

FIX v1.2.1
- Se viene riconosciuto un doppione e l'utente sceglie Annulla, la scansione viene azzerata completamente.
- Rimossi foto, risultato, candidati, progresso OCR e stato della carta precedente.
- Il pulsante torna a "Riconosci carta" ed è pronto per una nuova scansione.

NOVITÀ v1.3
- Nome app personalizzabile dalle Impostazioni.
- Titolo dinamico: “La collezione di Nome”.
- Tab Carte: menu Ordina per con recente, nome, numero carta, rarità e valore stimato.
- Dentro una collezione: stesso menu Ordina per, con default numero carta crescente.
- Il nome del collezionista viene salvato localmente sul dispositivo.

FIX v1.3.1 – scansione mobile
- Pre-elaborazione specifica per smartphone.
- Ridimensionamento automatico delle foto molto grandi.
- OCR concentrato sulla parte alta e bassa della carta.
- Scala di grigi e contrasto aumentato per foil/riflessi.
- Messaggio d'errore corretto: un mancato match non significa automaticamente foto sfocata.
- Cache PWA aggiornata.

NOVITÀ v1.4 – riconoscimento a cascata
- Prima tenta numero carta + totale set + sigla set.
- Se non basta usa il nome letto dall'OCR.
- Se ci sono più risultati mostra candidati selezionabili.
- Se il riconoscimento non è sufficiente apre “Aiutami a identificarla”.
- Possibilità di cercare manualmente con nome / set / numero / totale.
- Possibilità di aggiungere manualmente una carta senza bloccare il flusso.
- Obiettivo: arrivare alla carta corretta con massimo un tap/correzione, invece di mostrare solo errore.

FIX v1.4.1
- Unificazione collezioni: POR e PRO vengono trattati come lo stesso set.
- “Equilibrio Perfetto” e “Equilibrio Perfetto (POR)” finiscono nella stessa collezione.
- Anche le carte già salvate vengono normalizzate in lettura, senza cancellare i dati.
- Ricerca manuale migliorata:
  * prova prima endpoint diretto set + numero
  * poi ricerca exact localId
  * verifica il totale ufficiale del set
  * accetta POR/PRO come alias
- Migliorata la probabilità di trovare carte che prima non venivano riconosciute “in nessun modo”.
