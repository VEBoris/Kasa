import './Dropdown.css'
import chevronDown from '../../assets/images/chevron-down.svg'
import chevronUp from '../../assets/images/chevron-up.svg'
import { useState } from 'react'
//import {useState} from 'react'

function Collapse (props) {
    const content = props.content
    const title = props.title
    const [isOpen, setIsOpen] = useState(false)
    const showCollapse = () => {
        if(!isOpen){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
    }
    return(
        <div className='dropdown-item'>
            <div className='dropdown-menu' onClick={showCollapse}>
                <h3 className='dropdown-title'>{title}</h3>
                <img src={isOpen ? chevronUp : chevronDown} alt='dropdown-cevron'/>
            </div>
            <div className={!isOpen ? 'dropdown-content hidden' : 'dropdown-content show'}>
                {title === 'Equipements' ? <ul>{content.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{content}</p>}
            </div>
        </div>
    )
}

export default Collapse