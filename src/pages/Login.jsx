import React, { useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { currentUser, signinWithGoogle } = UserAuth();

    const handleLogin = async () => {
        try {
            await signinWithGoogle();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (currentUser) {
            navigate("/chat");
        }
    }, [currentUser]);

    return (
        <div className="hero min-h-screen loginbackground">
            <div className=" text-center loginContent">
                <div className=''>
                    <img className='mx-auto ' src="https://smvdu.ac.in/wp-content/uploads/2023/07/logo-g20-1.png" alt="" height={190} width={220} />
                </div>
                <div className=' text-slate-100 font-semibold '>
                        KINDLY AUTHENTICATE YOURSELF WITH GOOGLE, FOR CHATTING WITH THE COUNSELLOR
                </div>
                <div className="mt-6">
                    <button onClick={handleLogin} className="px-6 py-4 rounded bg-blue-950 applybutton text-sm text-white font-semibold ">LOGIN  WITH GOOGLE</button>
                </div>
            </div>
        </div>
    )
}

export default Login