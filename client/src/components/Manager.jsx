import React, { useEffect } from 'react'
import { useRef, useState, } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()

    const [form, setform] = useState({ site: "", username: "", password: "" })

    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])





    const showPassword = () => {
        passwordRef.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icons/hide.png")) {
            ref.current.src = "icons/show.png"
            passwordRef.current.type = "password"
        }
        else {
            ref.current.src = "icons/hide.png"
            passwordRef.current.type = "text"
        }

    }
    const savePassword = () => {


        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log([...passwordArray, form])
        setform({ site: "", username: "", password: "" })
        toast('Password Saved Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });




    }

    const deletePassword = (id) => {
        console.log("Deleting password with id ", id)
        let c = confirm("Delete")
        if (c) {

            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('Password Deleted Successfully!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }

    }


    const editPassword = (id) => {
        console.log("Editing password with id ", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))

    }











    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('Copied to Clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",

        });
        navigator.clipboard.writeText(text)

    }



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />











            <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
            <div className="  p-3 md:p-0 md:mycontainer min-h-[88.2 vh]">
                <h1 className='text-4xl text font-bold text-center'>

                    <span className='text-green-500'> &lt;</span>

                    <span className='text-green-500 hover:font-bold'>Password Manager/&gt;</span>
                </h1>
                <p className='text-green-900 text-center'>Your Personal Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-green-500 w-full p-4 py-1' type="text" name="site" id="url" />
                    <div className="flex flex-row w-full md:flex-row justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-green-400 w-full p-4 py-1' type="text" name="username" id="username" />
                        <div className="relative">

                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-green-300 w-full p-4 py-1' type="password" name="password" id="password" />
                            <span className='absolute right-[3px] top-[3px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={27} src="icons/show.png" alt="eye" />
                            </span>
                        </div>

                    </div>

                    <button onClick={savePassword} className='flex justify-center rounded-full px-3 py-2 w-fit hover:bg-green-500 bg-green-600 gap-2 border'>

                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add password </button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold py-2'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div> No Passwords to show </div>}

                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10 ">
                        <thead className='bg-purple-300 text-black'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>

                            </tr>
                        </thead>
                        <tbody className='bg-purple-200'>
                            {passwordArray.map((item, index) => {

                                return <tr key={index}>
                                    <td className='text-center py-2 border'>
                                        <div className='items-center justify-center flex'>
                                            <a href={item.site} target='_blank'>{item.site}</a>


                                            <div onClick={() => { copyText(item.site) }}>

                                                <img className='cursor-pointer w-6 px-1' src="icons/copy.svg" alt="copy" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center
                                      py-2 border'>
                                        <div className='items-center justify-center flex'>

                                            <span> {item.username}</span>
                                            <div onClick={() => { copyText(item.site) }}>

                                                <img className='cursor-pointer w-6 px-1' src="icons/copy.svg" alt="copy" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' 
                                      py-2 border text-center'>
                                        <div className='items-center justify-center flex'>

                                            <span> {item.password}</span>
                                            <div onClick={() => { copyText(item.site) }}>

                                                <img className='cursor-pointer w-6 px-1' src="icons/copy.svg" alt="copy" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-center justify-center
                                      py-2 border flex items-center'>
                                        <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                            <img className='' src="icons/edit.svg" alt="" />
                                        </span>
                                        <span class="material-symbols-outlined cursor-pointer" onClick={() => { deletePassword(item.id) }}>
                                            delete
                                        </span>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
