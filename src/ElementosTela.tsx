import AliadosCampo from './AliadosCampo';
import BotoesCampo from './BotoesCampo';
import InimigosCampo from './InimigosCampo'

function ElementosTela({ className }: { className: string }) {

    return (
        <div className='itensCampoBatalha'>
            <div id="background-imagem"></div>

            <div className={className}>

                <AliadosCampo />
                <BotoesCampo />
                <InimigosCampo />

            </div>

        </div>
    )
}

export default ElementosTela


