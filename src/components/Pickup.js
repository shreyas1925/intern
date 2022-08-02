import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// import styled from "styled-components";
import TimePicker from 'react-time-picker';
import "../styles/Pickup.css"
import ewaste from "./ewaste.jpg"

const Pickup = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    const [location, setLocation] = useState('')

    return (
        <>
            <div className="banner-img">

            </div>
            <section className="signup">
                {/* <Fade bottom> */}
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">E-waste Pickup</h2>
                            <form
                                method="POST"
                                className="register-form"
                                id="register-form"
                            >
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i class="fa fa-user"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autocomplete="off"
                                        // value={user.name}
                                        // onChange={handleInputs}
                                        placeholder=" Enter your Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i class="fa fa-envelope"></i>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="off"
                                        // value={user.email}
                                        // onChange={handleInputs}
                                        placeholder=" Enter your Email"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">
                                        <i class="fa fa-phone"></i>
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        autoComplete="off"
                                        // value={user.phone}
                                        // onChange={handleInputs}
                                        placeholder="Enter your Phone number"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="work">
                                        <i class="fa fa-building"></i>
                                    </label>
                                    <input
                                        type="text"
                                        name="work"
                                        id="work"
                                        autoComplete="off"
                                        // value={user.work}
                                        // onChange={handleInputs}
                                        placeholder="Enter your Profession"
                                    />
                                </div>


                                {/* <div className="timepicker">
                                    <TimePicker onChange={onChange} value={value} />
                                </div> */}

                                <div className=" form-group">
                                    <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                                </div>
                                {/* <div className="form-group"> */}
                                <DatePicker wrapperClassName="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
                                {/* </div> */}
                                <div className="form-group ">
                                    <input
                                        type="submit"
                                        name="signup"
                                        id="signup"
                                        className=" btn btn-outline-info p-2"
                                        value="Submit"
                                    // onClick={PostData}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="signup-image">
                            <figure>
                                <img
                                    src={ewaste}
                                    alt="registration pic"
                                    className="mb-5"
                                />
                            </figure>
                            {/* <NavLink to="/login" className="signup-image-link mt-2">
                                I am already registered
                            </NavLink> */}
                        </div>
                    </div>
                </div>
                {/* </Fade> */}
            </section>
        </>
        // <MainDiv>
        //     <PickupDiv>
        //         <LoginContainer>
        //             <Login> Select a pickup </Login>
        //         </LoginContainer>
        //         <Div>
        //          
        //             <div className="main_btn">
        //                 <button className="btn"> Submit </button>
        //                 <button className="btn"> Clear </button>
        //             </div>
        //         </Div>
        //     </PickupDiv>
        //     <TableDiv>
        //         <h1>price chart</h1>
        //     </TableDiv>
        // </MainDiv>
    );

}

export default Pickup

// const TableDiv = styled.div``
// const MainDiv = styled.div`
// display:flex;
// justify-content:space-between;
// margin:150px;
// `

// const Div = styled.div`
//     width:100%;
//     height:100%;
//     margin-top:50px;
//     display: flex;
//     flex-direction:column;
//     align-items:flex-start;
//     // justify-content:space-between;
// `
// const PickupDiv = styled.div`

// `
// const Login = styled.div`
//   border: 1px solid #f9f9f9;
//   width:300px;
//   text-align:center;
//   padding: 8px 16px;
//   border-radius: 4px;
//   letter-spacing: 1.4px;
//   font-weight: bold;
//   text-transform: uppercase;
//   transition: 0.2s;
//   cursor: pointer;
//   background-color: #f8961e;

//   &:hover {
//     // background-color: white;
//     color: black;
//     border-color: #f8961e;
//   }
// `;

// const LoginContainer = styled.div`
//   flex: 1;
//   display: flex;
//   justify-content: flex-start;
// `;