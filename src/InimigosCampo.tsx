import * as imagens from './assets/img/imagens'
import { Personagens } from './interfaces'

import { useSelector } from "react-redux";
import { selectNome } from "./redux/slice";

function AliadosCampo() {

    const nome = useSelector(selectNome)

    const encontrarPersonagem = (id: string, aux: number) => {
        if (aux == 0) {
            return Personagens.find(personagem => id === personagem.inimigo);
        } else {
            return Personagens.find(personagem => personagem.id === id);
        }
    };

    const inimigo = encontrarPersonagem(nome, 0);

    var inimigo2 = null;
    var inimigo3 = null;

    if (inimigo) {
        inimigo2 = encontrarPersonagem(inimigo.parceiro1, 1);
        inimigo3 = encontrarPersonagem(inimigo.parceiro2, 1);
    }


    const img = imagens[`${inimigo?.id}` as keyof typeof imagens];
    const imgInimigo2 = imagens[`${inimigo?.parceiro1}` as keyof typeof imagens];
    const imgInimigo3 = imagens[`${inimigo?.parceiro2}` as keyof typeof imagens];


    return (
        <div className='inimigos'>

            <div id='inimigo2'>

                <div className='atributos'>
                    <h6>HP: {inimigo?.hp}</h6>
                    <h6>ATK: {inimigo?.atk}</h6>
                </div>

                <img className='imgTremer' src={img} />
                <img src={imagens.base} />
            </div>
            <div id='inimigo1-3'>

                <div className='atributos'>
                    <h6>HP: {inimigo2?.hp}</h6>
                    <h6>ATK: {inimigo2?.atk}</h6>
                </div>

                <img className='imgTremer' src={imgInimigo2} />
                <img src={imagens.base} />

                <div className='atributos'>
                    <h6>HP: {inimigo3?.hp}</h6>
                    <h6>ATK: {inimigo3?.atk}</h6>
                </div>
                <img className='imgTremer' src={imgInimigo3} />
                <img src={imagens.base} />
            </div>

        </div>
    )
}

export default AliadosCampo