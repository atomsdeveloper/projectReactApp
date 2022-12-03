import { useState } from 'react'


function Form() {

    function sending(e) {
        e.preventDefault()
        console.log(`Enviado com sucesso!`)
    }

    const  [user, setUser] = useState()
    const  [pass, setPass] = useState()

    return(
        <div>
            <form onSubmit={sending}>
                <div>
                    <label name='user'> user: </label>
                    <input type='text' name='user' id='user' onClick={ () => setUser(user.target.value) } />
                </div>

                <div>
                    <label> password: </label>
                    <input type='password' name='pass' onClick={ () => setPass(pass.target.value) } />
                </div> 

                <div>
                    <input type='submit' value='Enviar' /> 
                </div>
            </form>

        </div>
        
    )

}

export default Form
