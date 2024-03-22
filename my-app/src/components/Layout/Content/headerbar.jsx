import './content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function HeaderBar() {
    return (
        <div className='header_bar'>
            <span>Status:
                <select className='status'>
                    <option>Sale</option>
                    <option>...</option>
                </select>
            </span>

            <div className="icon_header"><FontAwesomeIcon icon={faBell} /></div>
        </div>
    );
}

export default HeaderBar;