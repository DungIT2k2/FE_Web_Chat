import './content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

function HeaderBar() {
    return (
        <div className='headerbar'>
            <span>Status:
                <select className='status'>
                    <option>Sale</option>
                    <option>...</option>
                </select>
            </span>

            <div className="iconheader"><FontAwesomeIcon icon={faBell} /></div>
        </div>
    );
}

export default HeaderBar;