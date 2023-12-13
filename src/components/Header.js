import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "./Common/Container";
import Button from "./Common/Button";
import AskQuestionModal from "./AskQuestionModal";
import SearchElement from "./Common/SearchElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { logout } from "../reducer/userReducer";
// import { login } from '../reducer/userReducer';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const HeaderWrapper = styled.header`
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;

const LogoImage = styled.img`
  height: 65px;
`;

const Menu = styled.div`
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  color: black;
  font-weight: 400;
  margin: 0 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e5e5e5;
  }
`;

const Icon = styled(FontAwesomeIcon).attrs({ icon: faPhone })`
  font-size: 18px;
  margin-right: 8px;
`;

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onClick = () => {
    if (!user) return navigate(`/login`);
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = async (e) => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    navigate(`/login`);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    dispatch(logout());
  };

  const placeHolder = "Search blogs or topics";

  // useEffect(() => {
  //   const userData = localStorage.getItem('user');
  //   if (userData) {
  //     dispatch(login(JSON.parse(userData)));
  //   }
  // }, [dispatch]);

  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <NavLink to="/">
            <LogoImage
              src="https://cdn.pixelbin.io/v2/small-queen-10eece/erase.bg()/Screenshot_2023-08-27_at_1_56_53_AM.png"
              alt="Law Firm Logo"
            />
          </NavLink>
          {user && <p>Welcome, {user.user_name}!</p>}
          <Menu onClick={() => setMenuOpen(!menuOpen)}>&#9776;</Menu>
          <SearchElement placeHolder={placeHolder}></SearchElement>
          <LinksWrapper>
            <StyledLink href="link_url">
              <Icon className="fas fa-phone"></Icon>
              Contact
            </StyledLink>
            <Button onClick={onClick}>Post Question</Button>
            {/* {!user && <NavLink to="/login">Login/Register</NavLink>} */}
            {!user && (
              <Button onClick={handleButtonClick}>Login/Register</Button>
            )}
            {user && <Button onClick={handleLogout}>Logout</Button>}
          </LinksWrapper>
        </Navigation>
      </Container>
      {isModalOpen && (
        <AskQuestionModal onClose={onClick} onSubmit={handleSubmit} />
      )}
    </HeaderWrapper>
  );
};

export default Header;
