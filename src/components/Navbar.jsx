import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const { currentUser, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='navbar fixed z-10 bg-neutral text-neutral-content'>
            <div className="conatinerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Chatline</a>
                {currentUser ? <button onClick={handleLogout} className='btn btn-primary'>Logout</button> : ""}
            </div>
        </div>
    )
}

export default Navbar
