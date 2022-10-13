import React from 'react'; 
import { Link, NavLink } from "react-router-dom";

export default function TopsMenu() { 
    
    return (
      <>
        <div className="top-trend-menu">
            <ul className="tat-left-menu">
                <li>
                    <NavLink to ="/Trending">All</NavLink>
                </li>
                <li>
                    <Link to ="/#">People</Link>
                </li>
                <li>
                    <Link to ="/#">Media</Link>
                </li>
                <li>
                    <Link to ="/#">Shotz</Link>
                </li>
                <li>
                    <Link to ="/#">Articles</Link>
                </li>
                <li>
                    <Link to ="/#">Poscast</Link>
                </li>
                <li>
                    <Link to="/#">#Tags</Link>
                </li>
                <li>
                    <Link to ="/#">MarketPlace</Link>
                </li>
                <li>
                    <Link to ="/#">BizPage</Link>
                </li>
                <li>
                    <Link to ="/#">Polls</Link>
                </li>
                <li>
                    <Link to ="/#">Groups</Link>
                </li>
            </ul>
        </div>
      </>
    );
} 