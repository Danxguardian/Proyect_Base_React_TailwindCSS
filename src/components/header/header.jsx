import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div>
                <ul className="flex justify-center w-full mb-4">
                    <li className="menuOption">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="menuOption">
                        <Link to="/promise">Promise</Link>
                    </li>
                    <li className="menuOption">
                        <Link to="#">Option</Link>
                    </li>
                    <li className="menuOption">
                        <Link to="#">Option</Link>
                    </li>
                    <li className="menuOption">
                        <Link to="#">Option</Link>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default Header;

