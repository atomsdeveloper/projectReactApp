import './List.component.css'
import Item from './Item.js'


function List() {
    return (
        <>
            <ul className='boxItens'>
                <Item marca='Ford' anoLancamento='1899' />
                <Item marca='Hyunday' />
                <Item />
            </ul>
        </>
    )
};

export default List