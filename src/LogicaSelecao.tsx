import { useState } from "react"
import TelaPersonagem from "./TelaPersonagem"
import AtributosPersonagem from "./AtributosPersonagem";
import {Parceiro, Personagens, Personagem} from './interfaces'

function LogicaSelecao () {

    const [parceiro1, setParceiro1] = useState<Parceiro>({ id: '', nome: '', imagem: './src/assets/img/interrogacao.png' });
    const [personagemPrincipal, setPersonagemPrincipal] = useState<Personagem>({id:'', nome: 'Informações do Lutador', hp: 0, atk: 0, imagem: './src/assets/img/interrogacao.png', passiva: '', parceiro1:'', parceiro2:''});
    const [parceiro2, setParceiro2] = useState<Parceiro>({ id: '', nome: '', imagem: './src/assets/img/interrogacao.png' });
    const [personagemFiltrado, setPersonagemFiltrado] = useState<string | null>(null);


    const encontrarParceiro = (id: string) => {
        return Personagens.find(personagem => personagem.id === id);
    };

    function atualizarPersonagens(personagem: Personagem) {

        setPersonagemPrincipal({id:personagem.id, nome: personagem.nome, hp: personagem.hp, atk: personagem.atk, imagem: './src/assets/img/' + `${personagem.id}` + '.png', passiva: personagem.passiva, parceiro1: personagem.parceiro1, parceiro2: personagem.parceiro2});

        const parce1 = encontrarParceiro(personagem.parceiro1);
        const parce2 = encontrarParceiro(personagem.parceiro2);

        if (parce1) {
            setParceiro1({ id: parce1.id, nome: parce1.nome, imagem: './src/assets/img/' + `${personagem.parceiro1}` + '.png' })
        }

        if (parce2) {
            setParceiro2({ id: parce2.id, nome: parce2.nome, imagem: './src/assets/img/' + `${personagem.parceiro2}` + '.png' })
        }
    }

    function exibePersonagem(personagem: Personagem) {

        if (personagemFiltrado === personagem.id) {
            setPersonagemFiltrado(null);
        } else {
            setPersonagemFiltrado(personagem.id);
        }

        atualizarPersonagens(personagem);
    }

    function exibeParce(parce: string) {
        const parceiro1 = encontrarParceiro(parce);
        if (parceiro1) {
            atualizarPersonagens(parceiro1);
        }
    }

    return (
        <div className="cards">
            <TelaPersonagem Personagens={Personagens} exibePersonagem={exibePersonagem} personagemFiltrado={personagemFiltrado} />
            <AtributosPersonagem exibeParce={exibeParce}  parceiro1={parceiro1} parceiro2={parceiro2}  personagemPrincipal={personagemPrincipal}/>
        </div>
    )

}


export default LogicaSelecao