// import React from "react";
// import styled from "styled-components";
// import {
//   faCog,
//   faFolder,
//   faPhone,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";

// const StyledIconList = styled.div`
//   display: flex;
//   margin-top: 67px;
//   flex-direction: row;
//   align-items: center;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1000;
//   background-color: #e6dbdb;
//   align-content: center;
//   flex-wrap: wrap;
//   justify-content: center;
//   .label {
//     padding: 15px;
//     margin-top: 20px;
//     font-size: 1.1rem;
//     padding-top: 0px;
//   }
// `;

// function QuickLink() {
//   const iconData = [
//     { icon: faPhone, label: "About", link: "/" },
//     { icon: faCog, label: "Blogs", link: "/blog" },
//     { icon: faFolder, label: "Forums", link: "/forum" },
//     { icon: faEnvelope, label: "Education", link: "/education" },
//     { icon: faEnvelope, label: "Internship", link: "/internship" },
//   ];

//   // return <QuickLinkCommon iconData={iconData} />;
//   return (
//     <StyledIconList>
//       {iconData.map((item) => (
//         <div className="label" key={item}>
//           {item.label}
//         </div>
//       ))}
//     </StyledIconList>
//   );
// }

// export default QuickLink;
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  faCog,
  faFolder,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const StyledIconList = styled.div`
  display: flex;
  margin-top: 67px;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: #e6dbdb;
  align-content: center;
  flex-wrap: wrap;
  justify-content: center;

  .label {
    padding: 15px;
    margin-top: 20px;
    font-size: 1.1rem;
    padding-top: 0px;
    cursor: pointer;
    transition: color 0.3s ease; /* Add a smooth transition effect */
  }

  .label:hover {
    color: #4e6bff; /* Change color on hover */
  }
`;

function QuickLink() {
  const navigate = useNavigate();

  const iconData = [
    { icon: faPhone, label: "About", link: "/" },
    { icon: faCog, label: "Blogs", link: "/blog" },
    { icon: faFolder, label: "Forums", link: "/forum" },
    { icon: faEnvelope, label: "Education", link: "/education" },
    { icon: faEnvelope, label: "Internship", link: "/internship" },
  ];

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <StyledIconList>
      {iconData.map((item) => (
        <div
          className="label"
          key={item.label}
          onClick={() => handleClick(item.link)}
        >
          {item.label}
        </div>
      ))}
    </StyledIconList>
  );
}

export default QuickLink;
