import './People.component.css';

function People( {name, age, work, country} ) {

    const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GyXOMs3Uix7E7WHHwwS5BPcgcKiIeKUAWSvEifL4gFnY3_SGuOtFplyfK-Pi8Ucv-uw&usqp=CAU';

    return (
        <div>
            <img className='imgSelecao' src={url} alt='Logo Seleção Brasileira'/>
            <p> Nome: {name} </p>
            <p> Idade: {age} </p>
            <p> Work: {work} </p>
            <p> País: {country} </p>
        </div>
    )
}

export default People