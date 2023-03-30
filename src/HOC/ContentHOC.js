import React from 'react'
import { useSelector } from 'react-redux'



export default function ContentHOC(props) {

    const { Component } = useSelector(state => state.ContentReducer)
    return <div className='mr-4'>{Component}</div>
}
