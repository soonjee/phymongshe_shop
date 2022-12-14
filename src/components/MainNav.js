import React from 'react'
import { Link } from 'react-router-dom'

const MainNav = () => {
    return (
        <ul>
            <li><Link to='/'>BRAND</Link></li>
            <li><Link to='/shopList'>SHOPPING</Link></li>
            <li><Link to='/'>REVIEW</Link></li>
            <li><Link to='/'>EVENT</Link></li>
            <li><Link to='/'>COMMUNITY</Link></li>
            <li><Link to='/'>CS CENTER</Link></li>
            <li><Link to='/'>PROFESSIONAL</Link></li>
        </ul>
    )
}

export default MainNav