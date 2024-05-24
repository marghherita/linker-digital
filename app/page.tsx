"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { nanoid } from "nanoid";

export default function Home() {
  const projects: {
    id?: string;
    title: string;
    description?: JSX.Element | string;
    price?: string;
    time?: string;
  }[] = [
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
            Almeno 3 giorni prima della consulenza ti invieremo alcune domande
            per capire meglio i tuoi obiettivi.
            <br /> <br />
            Ecco cosa aspettarti se accedi a questo servizio:
          </p>
          <ul className="list-disc px-4 flex flex-col gap-2">
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
              Approfondimento sull&apos;interpretazione dei dati per migliorare
              le campagne e ottenere un migliore ritorno sull&apos;investimento.
            </li>
            <li>
              Al termine delle 6 sessioni avrai gli strumenti principali per
              realizzare una strategia, implementare e analizzare in prima
              persona una campagna pubblicitaria.
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
      description: "Test",

      price: "90",
      time: "90 MIN",
    },
    {
      id: nanoid(),
      title: "Revisione delle tue campagne ADV",
      description: "Test",

      price: "75",
      time: "60 MIN",
    },
    {
      id: nanoid(),
      title: "Strategia di advertising su misura",
      description: "Test",

      price: "115",
      time: "90 MIN",
    },
    {
      id: nanoid(),
      title: "Sessione di follow-up",
      description: "Test",

      price: "65",
      time: "60 MIN",
    },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
