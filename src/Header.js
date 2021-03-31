import React from 'react'
import "./Header.css"
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'

function Header() {
    return (
        <div className="header">
            <PersonIcon/>
                <img
                    className="header__logo"
                    src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
                    alt="Textosterone"/>
            <ForumIcon/>
        </div>
    )
}

export default Header
