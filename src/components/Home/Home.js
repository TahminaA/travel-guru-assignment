import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import header from '../../Image/Rectangle.png';
import logo from '../../Image/Logo.png';
import { Button} from 'react-bootstrap';
import PlaceShow from '../PlaceShow/PlaceShow';








const Home = () => {
   
    return (
        <div>
            <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                       <input type="text" placeholder="Search your Destination" className=""></input>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                    <Button variant="warning">Login</Button>
                    </li>
                 
                </ul>
            </nav>
             <PlaceShow></PlaceShow>
             
            
           

            
          
           
        </div>
        </div>
    );
};

export default Home;