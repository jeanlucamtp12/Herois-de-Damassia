import { Personagem } from "./interfaces";


interface TelaPersonagemProps {
    Personagens: Personagem[];
    exibePersonagem: (personagem: Personagem) => void;
    personagemFiltrado: string | null;
}

function TelaPersonagem(props: TelaPersonagemProps) {

    return (


        <div className="telaPersonagem">

            <div className='titulo'>Selecione Um Lutador!</div>

            <div className="personagens">

                {props.Personagens.map((personagem) => (
                    <div className="card" id={personagem.id} key={personagem.id} onClick={() => props.exibePersonagem(personagem)} style={{
                        filter: props.personagemFiltrado === personagem.id ? 'grayscale(0%)' : 'grayscale(100%)',
                        border: props.personagemFiltrado === personagem.id ? 'solid 0.3vw green' : 'solid 0.3vw rgba(0, 0, 0, 0.708)',
                    }}>
                        <img src={personagem.imagem} />
                    </div>

                ))}

            </div>

        </div>
    )
}

export default TelaPersonagem