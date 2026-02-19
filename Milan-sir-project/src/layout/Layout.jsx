import React from 'react'
import Header from '../components/Header'
import { AccessProvider } from '../context/AccessContext'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import SimpleChatBot from '../components/SimpleChatBot'

function Layout({ children }) {
    return (
        <>
            <AccessProvider>
                <Header />
                {children}
                <Footer />
                <ScrollToTop />
                <SimpleChatBot />
            </AccessProvider>
        </>
    )
}

export default Layout
