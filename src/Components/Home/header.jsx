import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>

            <section>

                <nav>
                    <ul>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>

            </section>

        </>
    );
};

export default Header;
