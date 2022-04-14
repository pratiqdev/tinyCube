import React from 'react'
import useSlice from '../lib/redux/useSlice'
import Navbar from './Navbar'
import SplashPage from './SplashPage'

export default function MainSwitch(props:any) {
    const { ...data } = useSlice('user')

    if(!data.user_name){
        return <SplashPage />
    }else{
        return (
            <>
                <Navbar />
                {props.children}
            </>
        )
    }

}
