function Greetings( {nome} ) {

    function sayGreetings(varnome) {
        return  `O E-mail é:  ${varnome}!!`
    }

    { nome && 
        ( <p> { sayGreetings(nome) } </p> )
    }
    
}

export default Greetings