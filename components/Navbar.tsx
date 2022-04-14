import * as React from 'react'
import Link from 'next/link'
import style from '../styles/Navbar.module.css'
import { useSession } from 'next-auth/react'
import UserBadge from './UserBadge'

const Navbar = (props:any) => {
    const { data } = useSession()
    return(
        <>
        <nav className={style.nav_container}>
            <h1 className={style.main_heading}>tiny<b>Cube</b>{`   (${data?.user ? data?.user?.name : 'guest'})`}</h1>
            
            <div className={style.button_container}>
                {data?.user 
                    ? <>
                        <Link href='dashboard'>Dashboard</Link>
                        <Link href='items'>Items</Link>
                        <Link href='api/auth/signout'>Sign Out</Link>
                        <UserBadge />
                    
                    </>
                    : <>
                        <Link href='api/auth/signin'>Sign In</Link>
                    </> 
                }
            </div>
            
        </nav>
        </>
    )
}

export default Navbar