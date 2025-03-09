import React from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router';

export default function Root(){

    return(
        <>
            <Header/>
            <NavBar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}