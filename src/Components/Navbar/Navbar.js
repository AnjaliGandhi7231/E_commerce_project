import React from 'react'
import './Navbar.css'
// import SearchIcon from '@mui/icons-material/Search';
export default function Navbar() {
    return (
        <>
            <div className='container'>
                <nav className='navbarcss'>
                    <img src={""} alt="" className='logo' />
                    <ul >
                        <li className='licss'>Home</li>
                        <li className='licss'>Product</li>
                        <li className='licss'>Contact</li>
                    </ul>
                </nav>
            </div>

            <div style={{ 'border': '1px solid red' }}
            >
                <input type='text' className='search' placeholder='Search for items...' />
                {/* <SearchIcon className='searchIcon cursor'/> */}
            </div>
        </>

    )
}
