import React from 'react'
import "./style.css";
import { Link } from 'react-router-dom'


export default function Sidebar() {
    return (
        <div class="sidebar" id="sidebar">
           
            <div class="logo">Fittness Nation</div>
            <Link to="/"><i class="fas fa-home"></i><span>Home</span></Link>
            <Link to="/a"><i class="fas fa-info-circle"></i><span>About</span></Link>
            <Link to="/s"><i class="fas fa-concierge-bell"></i><span>Services</span></Link>
            <Link to="/c"><i class="fas fa-envelope"></i><span>Contact</span></Link>
            <Link to="/fq"><i class="fas fa-comments"></i><span>Faqs</span></Link>
            <hr />
            <a href="#logout" class="text-danger"><i class="fas fa-sign-out-alt"></i><span>Logout</span></a>
        </div>
    )
}
