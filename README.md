# Descrizione
Il sito web "Il mistero di Dino Buzzati: Il limine tra realtà e fantastico" costituisce una componente fondamentale di un progetto ampio il cui scopo primario è l'aggregazione e la fruizione digitale esaustiva dell'intera produzione artistica di Dino Buzzati. La sua audience target non è circoscritta a un settore specifico, ma è concepita con l'obiettivo di garantire un accesso completo alle risorse culturali. Questo approccio mira a garantire l'accessibilità e l'intelligibilità pratica dei contenuti a qualsiasi osservatore, indipendentemente dalla sua formazione accademica.

Nel contesto del progetto globale, è stata ideata l'Open Access Foundation (OAF), un'organizzazione fittizia con la finalità di mettere a disposizione del pubblico, in modo gratuito, le opere artistiche dei principali autori italiani deceduti. Tale iniziativa consente di coniugare efficacemente la metadatazione digitale, finalizzata alla conservazione delle opere culturali analogiche corrispondenti, con l'apertura al pubblico delle informazioni pertinenti. Di conseguenza, gli utenti acquisiscono una consapevolezza della metadatazione stessa e hanno la possibilità di esplorare in modo virtuale romanzi, opere d'arte e altre risorse culturali.

# URL
Il sito è consultabile a questo indirizzo https://annasette7.github.io/sito-web-dhch/

# Funzionalità attive
Il sito web presenta una struttura composta principalmente da tre pagine: la homepage, il catalogo e la pagina dell'item, quest'ultima dedicata alla raccolta di racconti denominata "La boutique del mistero". Ciascuna di queste pagine ospita diverse sezioni di navigazione, progettate per fornire al pubblico una serie di risorse informative pertinenti.

## Barra di navigazione
La barra di navigazione principale offre diverse categorie di navigazione all'interno del sito. A sinistra, è presente il logo del sito, che funge da collegamento diretto alla homepage. A destra, è presente un menu a discesa che si espande quando si fa clic sul pulsante con l'icona corrispondente. Questo menu contiene ulteriori informazioni, che sono inoltre presenti nel footer del sito. Al momento, sono state implementate solo le funzionalità di navigazione relative all'icona, alla pagina principale (home) e al catalogo.

## Footer
Il footer del sito contiene principalmente sezioni di testo con collegamenti cliccabili, sebbene questi collegamenti non siano stati ancora sviluppati. Queste sezioni includono "Chi siamo", "Informazioni utili" e "Aiuto". Inoltre, sono presenti pulsanti con icone social che forniscono i recapiti social del sito, ma i collegamenti a tali profili non sono ancora stati attivati.

## Pagina Principale (Home)
All'interno della pagina principale del sito, sono presenti diverse sezioni di navigazione per agevolare l'esperienza dell'utente.

### Barra di Ricerca
La barra di ricerca semanticamente correlata all'intero sito web è posizionata nella parte superiore della homepage. Questa consente agli utenti di effettuare ricerche specifiche.

Subito sotto è invece presente una sezione divisa in tre colonne - la linea del tempo, il login e sfogliare le opere - che permettono, quando cliccate, di spostarsi da un punto all'altro della homepage a seconda delle proprie necessità.

### Linea del tempo
Subito sotto la barra di ricerca, troviamo la "Linea del Tempo". Questa caratteristica è stata creata utilizzando uno strumento fornito da Knightlab ed è interattiva. Gli utenti possono esplorare la linea del tempo scorrendo orizzontalmente o utilizzando la cronologia sottostante. Qui sono rappresentati i momenti più significativi e cruciali nella vita dell'autore.

### Accesso e Registrazione
Sulla homepage, sono presenti due form distinti: uno per l'accesso e uno per la registrazione al server del sito. Tuttavia, è importante notare che i link per l'azione di registrazione o accesso ("Registrami" e "Accedi") non sono stati ancora implementati e rimangono vuoti in questa fase dello sviluppo.

### Opere
Nella sezione "Opere" della homepage, gli utenti possono trovare un carosello automatico che mostra le opere dell'autore. È possibile accedere a queste opere in formato completo e leggerle online facendo clic su un pulsante denominato "Sfoglialo ora". Va notato che il collegamento ipertestuale associato a questo pulsante non è stato ancora attivato nell'attuale fase di sviluppo del sito.

## Catalogo
La sezione del catalogo è strutturata in due parti principali:

### Catalogazione Completa
Una parte del catalogo presenta una catalogazione completa degli item. Questa sezione è dotata di opzioni di filtraggio sia nella parte superiore della pagina che nella barra laterale.

#### Filtraggio per Categoria
Nella parte superiore, gli item sono suddivisi in categorie basate sulla natura degli oggetti culturali. Le categorie includono narrativa, giornalismo, pittura, musica e articoli.

#### Filtraggio Avanzato
Nella barra laterale, è possibile effettuare un filtraggio avanzato. Qui, è possibile utilizzare delle "breadcrumb" per comprendere la posizione all'interno del sito e navigare all'indietro. Inoltre, ci sono pulsanti di filtraggio che consentono di ordinare gli oggetti culturali in base all'ordine alfabetico, cronologico o al creatore, anno di creazione e tipo di supporto. Tuttavia, è importante notare che queste funzioni di filtraggio non sono ancora state implementate e i relativi link rimangono inattivi, ad eccezione delle breadcrumb.

### Card degli Oggetti Culturali
La parte principale della pagina del catalogo presenta nove card, ognuna delle quali rappresenta un oggetto culturale. Passando il mouse su queste card, compare il titolo dell'oggetto culturale, che è cliccabile e conduce direttamente alla pagina dedicata esclusivamente a quell'item. Attualmente, solo la prima card, che contiene la raccolta di racconti "La boutique del mistero," è dotata di un link funzionante che apre una nuova scheda del browser.

### Esplorazione per Temi
Infine, è presente una sezione di esplorazione per i temi associati all'opera dell'autore, Dino Buzzati. Questi temi sono cliccabili e collegati a pagine informative all'interno della sezione "Temi" già presente nella barra di navigazione. Tuttavia, è importante notare che i link relativi a questa sezione non sono ancora stati sviluppati e rimangono inattivi.

## Item
La pagina dell'item è strutturata in tre sezioni principali, ciascuna delle quali serve un obiettivo specifico rivolto agli utenti.

### Oggetto Culturale Digitale
La prima sezione è dedicata all'oggetto culturale in formato digitale. Per visualizzarlo, è necessario effettuare l'accesso o la registrazione. La visualizzazione è consentita attraverso un apposito pulsante all'interno della card, che attualmente non è ancora stato implementato con un link funzionante. A sinistra, è presente una colonna dedicata alla critica relativa all'oggetto culturale, il che consente un'analisi approfondita da parte di esperti nel campo mediante il reindirizzamento ad altri siti web.

### Metadatazione dell'Oggetto Culturale Digitale e Analogico
La seconda sezione comprende la metadatazione dell'oggetto culturale. A destra, è disponibile la metadatazione Dublin Core in formato HTML, presentata in una tabella che include dati ritenuti fondamentali, con opportuni controlli di autorità e collegamenti esterni. A sinistra, è possibile scaricare i metadati, inclusi il file XML/DC contenente la metadatazione dell'oggetto digitale e il file XML/TEI che comprende la metadatazione completa dell'oggetto, sia digitale che analogico, insieme al testo completo marcato. Sotto i metadati scaricabili, è presente una sezione contenente etichette di categoria associate all'oggetto culturale presente nella pagina web. Tuttavia, i pulsanti relativi a queste funzionalità non sono ancora stati attivati.

### Altri Oggetti Culturali da Esplorare
Infine, vi è una sezione dedicata ad altri oggetti culturali dello stesso autore, anch'essi presentati all'interno di card. Il titolo di ciascun oggetto è un link cliccabile che conduce a una pagina separata. È importante notare che i link relativi a questa sezione non sono ancora stati implementati.
