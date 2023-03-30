import React, { useEffect, useState } from 'react'
import { auth, provider } from '../../firebase/firebase';
import { signInWithPopup } from "firebase/auth";
import { localStorageService } from '../../services/localService';
import HomePage from '../HomePage/HomePage';
import { Avatar, Button, Dropdown, Menu, Modal, Space } from 'antd';
import "../LoginPage/Login.css"
import { AppleOutlined, FacebookOutlined, GoogleOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

export const ACCESS_TOKEN = "ACCESS_TOKEN"

export default function Login() {

    const dispatch = useDispatch()

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const [value, setValue] = useState("")
    const fName = value?.charAt(0).toUpperCase()
    const handleLogin = () => {
        signInWithPopup(auth, provider).then((data) => {
            const dataUser = data.user.email
            console.log({ data });
            setValue(dataUser)
            localStorage.setItem(ACCESS_TOKEN, data.user.accessToken)
            localStorageService.setUserLocal(dataUser)
        })
    }
    useEffect(() => {
        setValue(localStorageService.getUserLocal())
    })


    const menu = (
        <Menu className="p-0 w-100">
            <div>
                {value ? (
                    <div className="">
                        <button
                            onClick={(e) => {

                                localStorage.clear();
                                window.location.reload();
                            }}

                            type="button" className="self-center px-8 py-2 text-white border rounded bg-amber-600 w-100" data-toggle="modal" data-target="#modelId">
                            <Menu.Item style={{ color: "white" }} >Logout</Menu.Item>
                        </button>
                    </div>



                )
                    : ""}

            </div>
        </Menu>
    );


    return (
        <div className='w-10 h-10 mr-2 rounded-full'>
            {value ?
                <Dropdown overlayStyle={{ display: "" }} overlay={menu} placement="bottomRight" arrow>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            <div className='auth'>
                                <p className='flex items-center justify-center w-10 h-10 text-xl text-white rounded-full bg-emerald-600 '>{fName}</p>
                            </div>
                        </Space>
                    </a>
                </Dropdown>


                :
                <div>


                    <Avatar className='cursor-pointer ' size="large" icon={<UserOutlined onClick={showModal} />} />

                    <Modal className='w-full h-56 ' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        <div className=''>
                            <div className='flex justify-center mb-4 onclick'>
                                <h1 className='text-3xl '>Login</h1>
                            </div>
                            <div className='px-20'>
                                <div
                                    onClick={handleLogin}
                                    className='flex items-center justify-start p-2 my-3 bg-red-600 border cursor-pointer rounded-xl'>
                                    <div className='pb-2 mr-2'>
                                        <span className='pb-2 text-2xl'><GoogleOutlined /></span>
                                    </div>
                                    <div className='text-2xl text-white'>
                                        <span> Login With Google</span>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start p-2 my-3 bg-blue-600 border cursor-pointer rounded-xl'>
                                    <div className='pb-2 mr-2'>
                                        <span className='pb-2 text-2xl'><FacebookOutlined /></span>
                                    </div>
                                    <div className='text-2xl text-white'>
                                        <span> Login With Facebook</span>
                                    </div>

                                </div>

                                <div className='flex items-center justify-start p-2 my-3 bg-blue-600 border cursor-pointer rounded-xl'>
                                    <div className='pb-2 mr-2'>
                                        <span className='pb-2 text-2xl'><AppleOutlined /></span>
                                    </div>
                                    <div className='text-2xl text-white'>
                                        <span> Login With Apple</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </Modal>
                </div >}
        </div >
    )
}
