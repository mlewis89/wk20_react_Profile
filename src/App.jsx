// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';

import './App.css';

//import sum elements
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App(){
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
