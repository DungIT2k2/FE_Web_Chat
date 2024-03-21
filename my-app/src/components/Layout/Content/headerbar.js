import './content'

function HeaderBar() {
    return ( 
        <div className='headerbar'>
            <span>Status: </span>
            <select className='status'>
                <option>Sale</option>
                <option>...</option>
            </select>
        </div>
    );
}

export default HeaderBar;