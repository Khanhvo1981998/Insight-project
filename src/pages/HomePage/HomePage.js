import React, { Component, useState } from 'react'
import "./HomePage.css"
import logo from "../../assets/logo.png"
import { BiHomeAlt } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import { TbFileInvoice } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUnorderedList, AiOutlineSetting, AiOutlineSearch, AiOutlineCalendar } from "react-icons/ai";
import { FiMonitor, FiMail } from "react-icons/fi";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from 'antd';

import { OPEN_CONTENT } from '../../redux/reducers/ContentReducer';
import HomeContent from './HomeContent/HomeContent';
import DoiSoatVe from '../DoiSoatVe/DoiSoatVe';
import { useDispatch } from 'react-redux';
import ContentHOC from '../../HOC/ContentHOC';
import QuanLyVe from '../QuanLyVePage/QuanLyVe';
import Login from '../LoginPage/Login';
import Test from '../LoginPage/Test';





export default function HomePage() {
    const dispatch = useDispatch()
    return (
        <div className="wrapper-home">
            <div className="flex">
                <div className="w-1/5 wrapper-menu">
                    <div className="menu">
                        <div className="menu-logo">
                            <div className="insight-logo">
                                <img src={logo} alt="logo" />
                            </div>
                        </div>
                        <div className="nav-menu">
                            <div className="nav-list">
                                <ul>

                                    <li className="rounded nav-item active"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                Component: <HomeContent />
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""><BiHomeAlt className='icon' />Trang chủ</a></li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                Component: <QuanLyVe />
                                            }
                                            dispatch(action)

                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""><HiOutlineTicket className='icon' /> Quản lý vé</a></li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                Component: <DoiSoatVe />
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""><TbFileInvoice className='icon' />Đối soát vé</a></li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                // Component: <DoiSoatVe />
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""> <AiOutlineUnorderedList className='icon' />Danh sách sự kiện</a></li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                // Component: Component
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""><FiMonitor className='icon' />Quả lý thiết bị</a></li>
                                    <li className="nav-item"><a
                                        onClick={(e) => {
                                            e.preventDefault()
                                            const action = {
                                                type: OPEN_CONTENT,
                                                // Component: Component
                                            }
                                            dispatch(action)
                                        }}
                                        className='flex my-2 ml-1 mr-20 logo-item' href=""><AiOutlineSetting className='icon' />Cài đặt</a></li>


                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-4/5 wrapper-chart">
                    <div className="chart-header">
                        <div className='flex justify-between mt-2 search-home'>
                            <div>
                                <input className='' type="search" placeholder=' Search' />
                                <AiOutlineSearch className='search-icon' />
                            </div>
                            <div className='flex items-center gap-4 text-3xl'>
                                <FiMail />
                                <IoMdNotificationsOutline />

                                <Login />
                            </div>

                        </div>
                        <div className='content'>
                            <ContentHOC />
                        </div>
                    </div>
                    <div className="chart-footer">

                    </div>

                </div>

            </div>

        </div>
    )
}
