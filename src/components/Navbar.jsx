import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <div className="conatinerWrap flex justify-between">
                <a className="btn btn-ghost normal-case text-xl">Chatline</a>
                <button className='btn btn-primary'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar
