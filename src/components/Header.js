import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "../styles/Header.css";
import { firebase } from "../firebase/firebase"

const Header = () => {

  const [userSignedIn, setuserSignedIn] = useState(false)
  const [burgerStatus, setBurgerStatus] = useState(false);
  const [userImage, setUserImage] = useState(null)
  const [name, setname] = useState("")

  const signIn = () => {

    var google_provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(google_provider)
      .then((result) => {
        let user = result.user;
        setname(user.displayName)
        alert(`Welcome ${name}`)
        setUserImage(user.photoURL);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserImage(user.photoURL)
      setname(user.displayName)
      return setuserSignedIn(true);
    }
    setuserSignedIn(false)

  })

  const signOut = () => {
    firebase.auth().signOut();
    alert(`Have a good day ${name}`)
  }

  return (
    <Container>
      <a href="/" className="header_logo">
        <img src="/logo.png" />
        <h3 className="">WE <span>ZEROES</span></h3>
      </a>

      <RightMenu>

        {
          !userSignedIn ? (
            <button className="header_btn" onClick={signIn}>Login</button>
          ) : (
            // <UserImg onClick={signOut} src={userImage} alt="" srcset="" />
            <button className="header_btn" onClick={signOut}>Logout</button>
          )
        }
        <MyMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Clothing</a>
        </li>
        <li>
          <a href="#">Rental</a>
        </li>
        <li>
          <a href="#">Food Delivery</a>
        </li>
        <li>
          <a href="#">Charger</a>
        </li>
        <li>
          <a href="#">Zero Store</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  // background-color: #ffb703;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  opacity:1;
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  margin-top: 8px;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    text-decoration: none;
  }
  @media (max-width: 1190px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    margin-right: 10px;
  }
`;

const MyMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  width: 305px;
  z-index: 16;
  padding: 21px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 0.2s;
  li {
    margin-top: 25px;
    list-style: none;
    padding: 15px 0;
    background-color:white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      text-decoration: none;
      font-weight: 600;
      background-color:white;
      color:black;
      text-decoration: none;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  background-color:white
`;
const CustomClose = styled(CloseIcon)`
background-color:white`;