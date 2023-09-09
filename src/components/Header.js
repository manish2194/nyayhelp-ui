// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import Container from './Common/Container';

// const HeaderWrapper = styled.header`
//   background-color: #FFFFFF;
//   padding: 10px 0;
//   color: #333;
//   box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease;
// `;

// const Navigation = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-wrap: wrap;
// `;

// const NavLink = styled(Link)`
//   margin: 0 20px;
//   color: #666;
//   text-decoration: none;
//   font-weight: 600;
//   transition: color 0.3s ease-in-out;
//   padding: 8px 12px;
//   border-radius: 4px;

//   &:hover {
//     color: #555;
//     background-color: #f5f5f5;
//   }

//   @media (max-width: 768px) {
//     margin: 10px 0;
//     display: block;
//     text-align: center;
//   }
// `;

// const LogoImage = styled.img`
//   height: 70px;
// `;

// const Menu = styled.div`
//   font-size: 1.8rem;
//   display: none;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     display: block;
//   }
// `;

// const LinksWrapper = styled.div`
//   @media (max-width: 768px) {
//     display: ${props => props.open ? 'block' : 'none'};
//     width: 100%;
//   }
// `;

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <HeaderWrapper>
//       <Container>
//         <Navigation>
//           <LogoImage src="https://cdn.pixelbin.io/v2/small-queen-10eece/erase.bg()/Screenshot_2023-08-27_at_1_56_53_AM.png" alt="Law Firm Logo" />
//           <Menu onClick={() => setMenuOpen(!menuOpen)}>
//             ☰
//           </Menu>
//           <LinksWrapper open={menuOpen}>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/about">About</NavLink>
//             <NavLink to="/blog">Blog</NavLink>
//             <NavLink to="/forum">Forum</NavLink>
//             <NavLink to="/register">Login/Register</NavLink>
//           </LinksWrapper>
//         </Navigation>
//       </Container>
//     </HeaderWrapper>
//   );
// }

// export default Header;




import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from './Common/Container';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
  padding: 0px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.08);
  z-index: 1000;  // Ensures the header is always on top of other content
  width: 100%;
`;


const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

// const NavLink = styled(Link)`
//   margin: 0 25px;
//   color: #4A4A4A;
//   text-decoration: none;
//   font-weight: 400;
//   font-size: 0.95rem;
//   letter-spacing: 0.5px;
//   transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

//   &:hover {
//     color: #007BFF;
//     transform: translateY(-1px);
//   }
  

//   @media (max-width: 768px) {
//     margin: 12px 0;
//     display: block;
//     text-align: center;
//   }
// `;

const NavLink = styled(Link)`
  margin: 0 25px;
  color: #4A4A4A;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  padding: 5px 10px; // added some padding for better visual effect
  border-radius: 3px; // subtle rounding
  
  &:hover {
    color: #007BFF;
    transform: translateY(-3px); // more pronounced vertical lift
    box-shadow: 0px 10px 20px rgba(0, 123, 255, 0.2); // subtle blue shadow
  }
  

  @media (max-width: 768px) {
    margin: 12px 0;
    display: block;
    text-align: center;
  }
`;


const LogoImage = styled.img`
  height: 65px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
`;

const Menu = styled.div`
  font-size: 1.6rem;
  color: #4A4A4A;
  display: none;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #2A2A2A;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const LinksWrapper = styled.div`
  @media (max-width: 768px) {
    display: ${props => props.open ? 'block' : 'none'};
    width: 100%;
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      <Container>
        <Navigation>
          <LogoImage src="https://cdn.pixelbin.io/v2/small-queen-10eece/erase.bg()/Screenshot_2023-08-27_at_1_56_53_AM.png" alt="Law Firm Logo" />
          <Menu onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </Menu>
          <LinksWrapper open={menuOpen}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/forum">Forum</NavLink>
            <NavLink to="/register">Login/Register</NavLink>
          </LinksWrapper>
        </Navigation>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;

