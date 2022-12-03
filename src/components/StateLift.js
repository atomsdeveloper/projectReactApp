function StateLift( {setNome} ) {
    return(
        <div>
            <p> Dígite seu E-mail: </p>
            <input type='email' placeholder='Seu E-mail...' onChange={ (e) => setNome(e.target.value) } />
        </div>
    )
}

export default StateLift