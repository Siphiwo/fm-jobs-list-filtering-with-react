import React from 'react'
import headerImg from '../images/bg-header-desktop.svg'

function Header() {
    return (
        <div className="py-4 relative h-32 cyan">
            <img src={headerImg} className="absolute inset-0 w-full h-full object-cover" />
        </div>
    )
}

export default Header
