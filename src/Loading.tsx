import { loading } from './assets/img/imagens'

function Loading({ id }: { id: string }) {
    return (
        <div id={id}>
            <img src={loading} />
            <h1>Carregando.  Aguarde!</h1>
        </div>
    )
}

export default Loading