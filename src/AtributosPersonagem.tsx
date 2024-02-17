
import Loading from "./Loading";
import { Personagem } from "./interfaces";
import { Parceiro } from "./interfaces";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeNome } from "./redux/slice";
import { changeInterruptor } from "./redux/slice";


interface AtributosPersonagemProps {
    parceiro1: Parceiro;
    parceiro2: Parceiro;
    exibeParce: (parce: string) => void;
    personagemPrincipal: Personagem;
}


function AtributosPersonagem(props: AtributosPersonagemProps) {

    const [abrirLoading, setAbrirLoading] = useState<boolean>(false);
    const dispatch = useDispatch();


    function ativarLoading() {

        if (props.personagemPrincipal.id != '') {
            setAbrirLoading(true);
            dispatch(changeNome(props.personagemPrincipal.id));

            setTimeout(() => {
                setAbrirLoading(false);
                dispatch(changeInterruptor(false));
            }, 10000);
        }
    }


    return (
        <div className="selecao">

            <div className="infoPer">
                <img className="principal" src={props.personagemPrincipal.imagem} />
            </div>


            <div className="aliados">

                <div id="atributosPersonagem">
                    <h2 id="nomePersonagem">{props.personagemPrincipal.nome}</h2>
                    <h4>{props.personagemPrincipal.passiva}</h4>
                </div>


                <div className="cardAliados">
                    <div>
                        <h2>Aliado 1</h2>
                        <h4>{props.parceiro1.nome}</h4>
                        <img className="parceirosHover" src={props.parceiro1.imagem} onClick={() => props.exibeParce(props.parceiro1.id)} />

                    </div>
                    <div>
                        <h2>Aliado 2</h2>
                        <h4>{props.parceiro2.nome}</h4>
                        <img className="parceirosHover" src={props.parceiro2.imagem} onClick={() => props.exibeParce(props.parceiro2.id)} />

                    </div>
                </div>

                <div>
                    <button id="botaoHistoria">Historia</button>
                    <button onClick={ativarLoading} id="botaoIniciar">Iniciar</button>

                    {abrirLoading && <Loading id="loading" />}


                </div>

            </div>

        </div>

    )

}

export default AtributosPersonagem

