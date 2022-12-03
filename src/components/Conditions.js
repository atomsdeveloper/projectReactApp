import { useState } from 'react'
 
function Conditions() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function sending(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function clearEmail(e) {
        e.preventDeafault()
        setUserEmail('')
    }

    return(
        <div>
            <form>
                <input type='text' placeholder='Seu E-mail' onChange={ (e) => setEmail(e.target.value) } />
                <button type='subimt' value='Enviar'  onClick={sending} />
                
                { userEmail && ( 
                    <div>
                        <p> O usuário é: {userEmail} </p>
                        <button onClick={clearEmail}> Fechar </button>
                    </div>
                ) }
            </form>
        </div>
    )
}

export default Conditions