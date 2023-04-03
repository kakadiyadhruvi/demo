import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>
            <nav>
                <Container>
                    <ul className='menu '>
                        {/* <li>
                            <Link to="/home">Home</Link>
                        </li> */}
                        {/* <li>
                            <Link to="/blog">Blog</Link>
                        </li> */}

                    </ul>
                </Container>
            </nav>

            <Outlet />

        </>
    )
};
export default Layout;

