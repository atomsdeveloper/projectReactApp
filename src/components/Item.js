import PropTypes from 'prop-types'

function Item( {marca, anoLancamento} ) {
    return (
        <>
            <li> {marca} - {anoLancamento} </li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string,
    anoLancamento: PropTypes.number
}

Item.defaultProps = {
    marca: 'Not found',
    anoLancamento: 'Undefined'
}


export default Item;