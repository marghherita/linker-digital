import { nanoid } from "nanoid";

type Service = {
  id?: string;
  title: string;
  description?: JSX.Element | string;
  price?: string;
  time?: string;
};

export const Services: Service[] = [
  {
    id: nanoid(),
    title: "Coaching aziendale 1 to 1 per una crescita strategica",
    description: (
      <div className="flex flex-col gap-4 my-4">
        <h4 className="text-md font-bold">
          Sei il titolare di una PMI o di una piccola agenzia di marketing?
        </h4>

        <p>
          Questo servizio è pensato per le realtà che non dispongono di
          competenze interne avanzate in materia di advertising online e sono
          disposti a investire in formazione per acquisire le competenze
          necessarie per internalizzare i servizi.
          <br /> <br />
          Almeno 3 giorni prima della consulenza ti invieremo alcune domande per
          capire meglio i tuoi obiettivi.
          <br /> <br />
          Ecco cosa aspettarti se accedi a questo servizio:
        </p>
        <ul className=" px-4 flex flex-col gap-2">
          <li>
            Tutoring di 6 ore complessive che integra teoria e pratica,
            personalizzato sulle tue esigenze specifiche.
          </li>
          <li>
            Definizione degli obiettivi principali per creare una strategia
            pubblicitaria, quantificare il budget pubblicitario e creare
            campagne efficaci.
          </li>
          <li>
            Approfondimento sull&apos;interpretazione dei dati per migliorare le
            campagne e ottenere un migliore ritorno sull&apos;investimento.
          </li>
          <li>
            Al termine delle 6 sessioni avrai gli strumenti principali per
            realizzare una strategia, implementare e analizzare in prima persona
            una campagna pubblicitaria.
          </li>
        </ul>
      </div>
    ),

    price: "450",
    time: "60 MIN - 6 sessioni",
  },
  {
    id: nanoid(),
    title: "Configurazione del Business Manager di Meta",
    description: (
      <div className="flex flex-col gap-4 my-4">
        <h4 className="text-md font-bold">
          Hai provato a configurare il Business Manager di Meta, l&apos;account
          pubblicitario, le impostazioni di fatturazione, ma è più difficile del
          previsto?
        </h4>

        <p>
          Questo servizio è pensato per te. Una sessione individuale di 90
          minuti che ti renderà autonomo su questo strumento.
          <br /> <br />
          Ecco cosa aspettarti se accedi a questo servizio:
        </p>
        <ul className="list-disc px-4 flex flex-col gap-2">
          <li>
            Guida Pratica alla Configurazione del tuo Business Manager di Meta.
          </li>
          <li>Requisiti e Creazione del Business Manager.</li>
          <li>Aggiunta di Risorse al Business Manager.</li>
          <li>
            Gestione delle Persone, Account Pubblicitari e della Fatturazione.
          </li>
          <li>Creazione del Pixel.</li>
        </ul>
      </div>
    ),

    price: "90",
    time: "90 MIN",
  },
  {
    id: nanoid(),
    title: "Revisione delle tue campagne ADV",
    description: (
      <div className="flex flex-col gap-4 my-4">
        <h4 className="text-md font-bold">
          Ti guideremo attraverso la revisione delle tue campagne pubblicitarie
          su Facebook Ads, Google Ads e Linkedin Ads al fine di ottimizzare i
          risultati.
        </h4>

        <p>
          Almeno 3 giorni prima della sessione di consulenza ti invieremo alcune
          domande per capire meglio i tuoi obiettivi.
          <br /> <br />
          Ecco cosa aspettarti se accedi a questo servizio:
        </p>
        <ul className="list-disc px-4 flex flex-col gap-2">
          <li>
            Revisione dettagliata delle informazioni che ci hai fornito, in modo
            da poter discutere eventuali domande riguardanti il tuo progetto
            (target, strategia ecc.).
          </li>
          <li>
            Esplorazione di idee su possibili miglioramenti alla situazione
            attuale.
          </li>
          <li>
            Analisi di eventuali dubbi e consigli operativi
            sull&apos;implementazione della strategia proposta.
          </li>
          <li>
            Al termine della sessione sarai in possesso di un piano d’azione per
            il raggiungimento degli obiettivi.
          </li>
        </ul>
      </div>
    ),

    price: "75",
    time: "60 MIN",
  },
  {
    id: nanoid(),
    title: "Strategia di advertising su misura",
    description: (
      <div className="flex flex-col gap-4 my-4">
        <h4 className="text-md font-bold">
          Ti assisteremo nell&apos;elaborazione di una strategia pubblicitaria
          per il tuo progetto o la tua impresa, sia che tu abbia già altre
          strategia attive e vuoi esplorare nuove possibilità sia che questa sia
          la tua prima strategia di advertising. Prenderemo in considerazione,
          per lo sviluppo della strategia piattaforme pubblicitarie come Meta
          Ads, Google Ads e LinkedIn Ads.
        </h4>

        <p>
          Almeno 3 giorni prima della sessione di consulenza ti invieremo alcune
          domande per capire meglio i tuoi obiettivi
          <br /> <br />
          Ecco cosa aspettarti se accedi a questo servizio:
        </p>
        <ul className="px-4 flex flex-col gap-2">
          <li>
            Revisione dettagliata delle informazioni che ci hai fornito, in modo
            da poter discutere eventuali domande riguardanti il tuo progetto
            (target, strategia ecc.).
          </li>
          <li>
            Proposta di strategia e definizione di un piano d&apos;azione a
            partire dalle tue necessità.
          </li>
          <li>
            Analisi di eventuali dubbi e consigli operativi
            sull&apos;implementazione della strategia proposta.
          </li>
          <li>
            Al termine della sessione sarai in possesso di un piano
            d&apos;azione per il raggiungimento degi obiettivi.
          </li>
        </ul>
      </div>
    ),

    price: "115",
    time: "90 MIN",
  },
  // {
  //   id: nanoid(),
  //   title: "Sessione di follow-up",
  //   description: (
  //     <div className="flex flex-col gap-4 my-4">
  //       <h4 className="text-md font-bold">
  //         Se hai già fatto una sessione con noi, in questa sessione di follow up
  //         di 60 minuti possiamo continuare quanto abbiamo discusso in
  //         precedenza. Se dobbiamo discutere un nuovo progetto da 0 prenota la
  //         sessione di strategia di 90 minuti.
  //       </h4>

  //       <p>
  //         Questo servizio è pensato per le realtà che non dispongono di
  //         competenze interne avanzate in materia di advertising online e sono
  //         disposti a investire in formazione per acquisire le competenze
  //         necessarie per internalizzare i servizi.
  //         <br /> <br />
  //         Ecco cosa aspettarti se accedi a questo servizio:
  //       </p>
  //       <ul className="list-disc px-4 flex flex-col gap-2">
  //         <li>
  //           Discussione di ulteriori temi o evoluzioni legati alla sessione
  //           precedente.
  //         </li>
  //         <li>
  //           Analisi dei risultati dopo la review delle campagne o
  //           l&apos;implementazione di una nuova strategia.
  //         </li>
  //       </ul>
  //     </div>
  //   ),
  //   price: "65",
  //   time: "60 MIN",
  // },
];
