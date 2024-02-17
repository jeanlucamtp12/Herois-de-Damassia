import { rostoArqueiro, rostoAtirador, rostoCavaleiro, rostoCleriga, rostoSereia, rostoBoneca, rostoMaga, rostoMinotauro, rostoEspantalho, rostoCantora, rostoBesta, rostoLadra, rostoFeiticeiro, rostoNinja, rostoMonge, rostoEspia } from './assets/img/imagens'

export interface Personagem {
    id: string,
    nome: string,
    imagem: string,
    passiva: string,
    hp: number,
    atk: number,

    parceiro1: string,
    parceiro2: string,

    inimigo: string,
}

export interface Parceiro {
    id: string;
    nome: string;
    imagem: string;
}

export const Personagens: Personagem[] = [

    {
        id: 'atirador',
        nome: 'Paulo - O Atirador',
        imagem: rostoAtirador,
        passiva: 'Rajada de Balas - O atirador dispara uma rajada de balas em um alvo inimigo, causando dano igual a 30.',
        hp: 90,
        atk: 25,

        parceiro1: 'minotauro',
        parceiro2: 'arqueiro',

        inimigo: 'espantalho',

    },

    {
        id: 'cavaleiro',
        nome: 'Sir. Victor - Cavaleiro',
        imagem: rostoCavaleiro,
        passiva: 'Golpe da Redenção - O cavaleiro desfere um golpe poderoso que causa causa 50 de dano a um inimigo, porem recebe 25 de dano de recuo.',
        hp: 110,
        atk: 20,

        parceiro1: 'cleriga',
        parceiro2: 'maga',

        inimigo: 'monge',
    },

    {
        id: 'arqueiro',
        nome: 'Jamile"s - Arqueiro',
        imagem: rostoArqueiro,
        passiva: 'Flecha de Fogo - A arqueiro lança uma flecha de fogo que queima um inimigo, causando 10 de dano e o deixando queimando por dois turnos, perdendo 10 de HP adicionais a cada turno.',
        hp: 90,
        atk: 25,

        parceiro1: 'minotauro',
        parceiro2: 'atirador',

        inimigo: 'ninja',
    },

    {
        id: 'cleriga',
        nome: 'Laura - A Cleriga',
        imagem: rostoCleriga,
        passiva: 'Escudo Divino - A cleriga invoca um escudo divino que absorve 20 de dano para si mesma.',
        hp: 150,
        atk: 5,

        parceiro1: 'maga',
        parceiro2: 'cavaleiro',

        inimigo: 'espia',
    },

    {
        id: 'sereia',
        nome: 'Elyana - A Sereia',
        imagem: rostoSereia,
        passiva: 'Onda de Impacto - A sereia lança uma onda de impacto que causa 15 de dano a todos os inimigos.',
        hp: 120,
        atk: 15,

        parceiro1: 'espia',
        parceiro2: 'boneca',

        inimigo: 'cantora',
    },

    {
        id: 'boneca',
        nome: 'Tatiane - A Lutadora',
        imagem: rostoBoneca,
        passiva: 'Motivação - A lutadora motiva um aliado, aumentando seu ataque em 10.',
        hp: 120,
        atk: 15,

        parceiro1: 'sereia',
        parceiro2: 'espia',

        inimigo: 'besta',
    },

    {
        id: 'maga',
        nome: 'Emilly - Maga',
        imagem: rostoMaga,
        passiva: 'Invocação Arcana - A maga convoca uma tempestade mágica que atinge todos os inimigos, causando 10 pontos de dano.',
        hp: 100,
        atk: 20,

        parceiro1: 'cleriga',
        parceiro2: 'cavaleiro',

        inimigo: 'feiticeiro',
    },

    {
        id: 'minotauro',
        nome: 'Diogus - O Minotauro',
        imagem: rostoMinotauro,
        passiva: 'Investida Poderosa - O minotauro avança com força total contra um inimigo, causando 20 de dano direto.',
        hp: 200,
        atk: 5,

        parceiro1: 'atirador',
        parceiro2: 'arqueiro',

        inimigo: 'ladra',
    },


    {
        id: 'espantalho',
        nome: 'Wesley - O Espantalho',
        imagem: rostoEspantalho,
        passiva: 'Aterrorizar - O espantalho emite um grito aterrorizante que reduz o ataque de todos os inimigos em 5.',
        hp: 200,
        atk: 5,

        parceiro1: 'ladra',
        parceiro2: 'monge',

        inimigo: 'atirador',
    },


    {
        id: 'cantora',
        nome: 'Sabrina - A Cantora',
        imagem: rostoCantora,
        passiva: 'Canção de Cura - A cantora canta uma melodia curativa que restaura 15 de HP para todos os aliados.',
        hp: 150,
        atk: 5,

        parceiro1: 'ninja',
        parceiro2: 'feiticeiro',

        inimigo: 'sereia',
    },


    {
        id: 'besta',
        nome: 'Elvis - O Homem Besta',
        imagem: rostoBesta,
        passiva: 'Proteção Instintiva - A besta antecipa os ataques do inimigo, consumindo toda sua barra de especial.',
        hp: 180,
        atk: 5,

        parceiro1: 'feiticeiro',
        parceiro2: 'ninja',

        inimigo: 'boneca',
    },


    {
        id: 'ladra',
        nome: 'Sheila - A ladra',
        imagem: rostoLadra,
        passiva: 'Furtividade - A ladra se camufla nas sombras, tornando-se invulnerável por 2 turno e recuperando 20 pontos de vida.',
        hp: 110,
        atk: 20,

        parceiro1: 'monge',
        parceiro2: 'espantalho',

        inimigo: 'minotauro',
    },

    {
        id: 'feiticeiro',
        nome: 'Ventus - Feiticeiro',
        imagem: rostoFeiticeiro,
        passiva: 'Explosão Arcana - O feiticeiro conjura uma explosão mágica que atinge todos os inimigos, causando 25 de dano a cada um.',
        hp: 100,
        atk: 20,

        parceiro1: 'ninja',
        parceiro2: 'cantora',

        inimigo: 'maga',
    },

    {
        id: 'ninja',
        nome: 'Ayame - O Ninja',
        imagem: rostoNinja,
        passiva: 'Lâmina Sombria - O ninja se move entre os inimigos, atacando até três alvos diferentes com sua lâmina oculta. Causa 15 de dano a cada alvo e, ao derrotar um inimigo, o ninja recupera 15 pontos de vida.',
        hp: 80,
        atk: 25,

        parceiro1: 'feiticeiro',
        parceiro2: 'cantora',

        inimigo: 'arqueiro',
    },


    {
        id: 'monge',
        nome: 'Derik - O Monge',
        imagem: rostoMonge,
        passiva: 'Zen Interior - O monge alcança um estado de tranquilidade interior, restaurando 20 de HP e aumentando seu ataque em 5.',
        hp: 180,
        atk: 10,

        parceiro1: 'espantalho',
        parceiro2: 'ladra',

        inimigo: 'cavaleiro',
    },

    {
        id: 'espia',
        nome: 'Anabella - A Espiã',
        passiva: 'Disfarce - A espiã se disfarça como um aliado, atraindo todos os golpes dos inimigos por 2 turnos, alterando qualquer dano recebido para 10 pontos.',
        imagem: rostoEspia,
        hp: 80,
        atk: 15,

        parceiro1: 'sereia',
        parceiro2: 'boneca',

        inimigo: 'cleriga',
    },

]