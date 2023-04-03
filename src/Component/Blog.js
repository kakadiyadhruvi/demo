import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useContext } from 'react';


const Demotoken = () => {


    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const isLogged = localStorage.getItem('confirmpassword');
    if (!isLogged) {
        navigate('/');
    }

    const handleChange = e => {
        setSearch(e.target.value);
        // setSearch(e.data.data.username);
    };
    const config = {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTkxZDY0YTU3ZmE0MzY2ZjEyMGE5ZCIsImlhdCI6MTY3OTM4Nzk5OCwiZXhwIjoxNjg3MTYzOTk4fQ.SQscDqGR6AC2KXVDz_-P1fOS87uGrfjKOIxTXs1H4CQ',
            "Content-Type": "application/json",
        }
    };
    const handleClick = () => {
        axios
            .get(`https://develop.kling.game/api/v1/admins/users/active?search=${search}`, config)
            .then((res) => {
                setProduct(res.data.data)
                // console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        axios
            .get('https://develop.kling.game/api/v1/admins/users/active ', config)
            .then((res) => {
                setProduct(res.data.data)
                // console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    const pagination = (currentPage) => {
        axios
            .get(`https://develop.kling.game/api/v1/admins/users/active?search=${currentPage}`, config)
            .then((res) => {
                setProduct(res.data.data)
                // console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })

    }
    const handlePageClick = (data) => {
        console.log(data.selected)

        let currentPage = data.selected + 1
        const CommentsFormServer = pagination(currentPage)
        console.log(CommentsFormServer)
    }

    return (
        <>
            <Container>
                <h2>Users</h2>
                <Row>
                    <Col lg={3}>
                        <div className='search-bar'>
                            <span className='search-icon' onClick={handleClick}>
                                <FaSearch />
                            </span>
                            <input type="text" placeholder='Search user' aria-label="Search" name="" id="" onChange={handleChange} />
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className='users-data'>
                            <ul>
                                <li>
                                    <Link href="" >Reputation</Link>
                                </li>
                                <li className='active'>
                                    <Link href="" className='active' >New users</Link>
                                </li>
                                <li>
                                    <Link href="" >Voters</Link>
                                </li>
                                <li>
                                    <Link href="" >Editors</Link>
                                </li>
                                <li>
                                    <Link href="" >Moderators</Link>
                                </li>

                            </ul>
                        </div>

                    </Col>
                </Row>
                <Row className='my-5'>
                    {product.map((data) => {
                        return (
                            <Col lg={4}>
                                <div className="card-bg" >
                                    <h4>{data.username}</h4>
                                    <p>{data.email}</p>
                                </div>
                            </Col>
                        )
                    })}

                </Row>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={25}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />


            </Container>
        </>
    )
}
export default Demotoken;

// password:a@111111