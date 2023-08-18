import React from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import '../css/head.css';

const Head = () => {
    const location = useLocation();

    return (
        <div className="head">
            <div className="mainName">
                <Link to="/" className="rowChoise">
                <span>Ticket Reservier</span>
                </Link>
            </div>

            <div className="mainFun">
                <Link to="/tickets" className={`rowChoise ${location.pathname === '/tickets' ? 'rowChoise_selected' : ''}`}>Tickets</Link>
                <Link to="/map" className={`rowChoise ${location.pathname === '/map' ? 'rowChoise_selected' : ''}`}>Map</Link>
                <Link to="/concerts" className={`rowChoise ${location.pathname === '/concerts' ? 'rowChoise_selected' : ''}`}>Concerts</Link>
                <Link to="/promo" className={`rowChoise ${location.pathname === '/promo' ? 'rowChoise_selected' : ''}`}>Promo</Link>
                <Link to="/reserved" className={`rowChoise ${location.pathname === '/reserved' ? 'rowChoise_selected' : ''}`}>Reserved</Link>
            </div>
        </div>
    )
}

export default Head;
