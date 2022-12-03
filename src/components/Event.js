import Buttons from './events./Buttons'

function Event() {

    function say() {
        console.log(`Primeiro componente enviado com sucesso!!!`)
    }

    <Buttons event={say} text="Componente 1" />
}

export default Event