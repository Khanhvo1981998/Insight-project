import React, { Component } from 'react'
import HomePage from '../../pages/HomePage/HomePage';
export const OPEN_CONTENT = "OPEN_CONTENT"

const stateDefault = {
    Component: <p> Nội dung mặc định</p>,
    ComponentDefault: <HomePage />
}

export const ContentReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case OPEN_CONTENT: {
            state.Component = action.Component;
            return { ...state }
        }

        default: return { ...state }
    }
}