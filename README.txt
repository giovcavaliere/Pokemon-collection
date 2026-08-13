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

NOVITÀ v1.5
- Tre modalità separate per aggiungere una carta:
  1. Foto/OCR
  2. Ricerca manuale seria per nome, numero e set
  3. Sfoglia collezione
- Ricerca per nome parziale via TCGdex.
- Ricerca diretta set + numero quando disponibili.
- Catalogo collezioni: cerca il set, aprilo e visualizza tutte le carte con immagine.
- Tocca una carta trovata/catalogata per caricarla come carta riconosciuta e aggiungerla normalmente.
- Lo scanner resta disponibile ma non è più un collo di bottiglia.

NOVITÀ v1.5.1
- Catalogo collezione con spazio inferiore aggiuntivo: la barra di navigazione non copre più le ultime carte durante lo scroll.
- Dopo aver scelto una collezione compare il campo Numero carta.
- Inserendo, ad esempio, 74 vengono mostrate solo le carte con numero 74.
- Pulsante “Tutte” per azzerare rapidamente il filtro e tornare all'intero set.
- Il filtro numero resta visibile in alto mentre si scorre il catalogo.

FIX v1.5.2 – aggiornamento PWA
- Versione visibile nell'intestazione: v1.5.2.
- Service worker riscritto: index.html usa network-first e non resta bloccato nella vecchia cache.
- skipWaiting + clients.claim per attivare subito la nuova build.
- Pulsante “Aggiorna app” nelle Impostazioni.
- Filtro numero carta reso graficamente più evidente.

FIX v1.5.3 – PWA iPhone installata
- Migrazione una tantum della PWA installata: unregister vecchi service worker e cancellazione cache.
- Reload forzato con parametro build=1.5.3.
- manifest start_url versionato.
- service worker registrato con URL versionato.
- Navigazione sempre network-first sulla PWA installata.

NOVITÀ v1.5.4 – valore stimato collezione
- Home: nuovo campo Valore stimato della collezione complessiva.
- Tab Collezioni: ogni collezione mostra la somma stimata delle carte possedute.
- Dentro una collezione: valore stimato totale del set posseduto.
- I doppioni vengono conteggiati perché sono copie realmente possedute.
- Se alcune carte non hanno un prezzo in euro, il valore viene indicato come “parziale”.
- Prezzi in dollari non vengono sommati ai prezzi in euro per evitare totali fuorvianti.

NOVITÀ v1.6 – stabilità PWA
- Rimossa la routine aggressiva che disregistrava Service Worker e cancellava cache a ogni versione.
- start_url e manifest id tornano stabili e non cambiano più a ogni release.
- index.html usa network-first: le nuove versioni vengono rilevate senza perdere i dati.
- Banner “Nuova versione disponibile” con aggiornamento esplicito.
- L'aggiornamento sostituisce solo il codice dell'app, non localStorage/IndexedDB.
- Richiesta navigator.storage.persist() per ridurre il rischio di eliminazione automatica dello storage.
- Esporta backup / Importa backup della collezione in JSON.
- Il pulsante “Aggiorna app” non cancella più cache o storage.
