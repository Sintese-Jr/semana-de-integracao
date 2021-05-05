import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Main from '../components/Main/Main';
import Find from '../components/Find/Find';
import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Main />
            <Find />
            <Footer />
        </>
    );
}

export default Home;