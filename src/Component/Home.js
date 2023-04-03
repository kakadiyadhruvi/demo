import React, { useState } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate();
    const password = ({
        old_password: oldPassword,
        new_password: newPassword,
        confirm_password: confirmPassword
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'post',
            url: 'https://develop.kling.game/api/v1/users/change-password',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTkzNGI1NDk2ZDE2YTdjNDg0ZTJkMSIsImlhdCI6MTY3OTU2MzkyMSwiZXhwIjoxNjg3MzM5OTIxfQ.thSGe0KKND24ZbWlaWh9Tpf5-DXdNfVEQoPtLkeztYU',
                "Content-Type": "application/json",
            },
            data: password,
        })
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    toast.success(response.data.message)
                    localStorage.setItem("confirmpassword", confirmPassword);
                }
                navigate('/blog');
            })
            .catch((error) => {
                console.log(error)
                if (error.response.status === 422) {
                    toast.error(error.response.data.message)
                }
            })
    }
    return (
        <>
            <Row className='px-0 g-0' >
                <Col lg={8} className='px-0' >

                    <div className="login-page-bg px-5">

                        <div className='login-text px-5'>
                            <h1>Your Space To Be Social</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adip scing elit</p>
                            <Row className='px-0'>
                                <Col lg={4} className='learn-btn' >
                                    <button>Learn-More</button>
                                </Col>
                                <Col lg={4} className='featu-btn' >
                                    <button>Our Features</button>
                                </Col>
                            </Row>
                        </div>

                    </div>

                </Col>
                <Col lg={4} className='main-form px-0' >
                    <form action="" className='form-fild' onSubmit={handleSubmit}>
                        <label htmlFor="oldpassword">Old Password:</label><br />
                        <input type="text" id='oldpass' name='oldpassword' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} required /> <br />
                        <label htmlFor="newpassword">New Password:</label><br />
                        <input type="text" id='newpass' name='newpassword' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /><br />
                        <label htmlFor="confirmpassword"> Confirm Password:</label><br />
                        <input type="text" id='confirmpass' name='confirmpassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} /><br /><br />
                        <button className='submit'>Submit</button>
                    </form>

                </Col>
            </Row>
            <ToastContainer />
        </>
    )
}

export default Home
