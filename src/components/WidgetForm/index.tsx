import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/bug.svg';
import ideiaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";

 export const feedbackTypes = {
    BUG: {
       title: 'Problema',
       image: {
           source: bugImageUrl,
           alt: 'Imagem de um inseto'
       }
    },

    IDEA: {
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },

    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    }
};


export type FeedbackType = keyof typeof feedbackTypes;

//Object.entries(feedbackTypes) => (Percorre todos os arrays e propriedades que tem dentro)
//  [ ['BUG', {...}],
//  ['IDEA', {...}],
//  ['OTHER', {...}]]



export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)



    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2ren)] md:w-auto" >
        <header>
        <span className="text-xl leading-6" >Deixe seu feedback</span>

        <CloseButton/>
        </header>


        {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            

        
                ) :(
                    <p>Hellow world</p>
                    )}


        <footer className="text-xs text-neutral-400">
        Feito com ♥ pela Rocketseat <a className="underline underline-offset-2" href="https://rocketseat.com.br" target="_blank">Rocketseat</a>

        </footer>


        </div>
    );
}