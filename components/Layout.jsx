import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    const router = useRouter();

    console.log(router)


    return (
        <div className=''>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            </Head>
            <div className='font-poppins w-full scrollbar-hide bg-black'>
                {
                    router.pathname !== "/events" && router.pathname !== "/eventDetail" && <Navbar />
                }
                {children}
                {
                    router.pathname !== "/events" && router.pathname !== "/eventDetail" && <Footer />
                }

            </div>
        </div>
    )
}

export default Layout