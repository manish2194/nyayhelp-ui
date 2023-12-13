import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const StyledIconList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: fit-content;

  .icon-item {
    text-align: center;
    margin: 15px;
  }

  .icon {
    font-size: 2rem;
    border: 0px solid #F6A62C; /* Border style */
    // background-color: #FEEFDD; /* Background color */
    padding: 15px; /* Padding for space around the icon */
    border-radius: 10%; /* Make the border rounded for a circular shape */
  }

  .label {
    margin-top: 20px;
    font-size: 1rem;
  }
`;

const QuickLinkCommon = ({iconData}) => {
  return (
    <StyledIconList>
      {iconData.map((item, index) => (
        <div className="icon-item" key={index}>
          <Link to={item.link} className="icon">
          <FontAwesomeIcon icon={item.icon} />
            </Link>
          <div className="label">{item.label}</div>
        </div>
      ))}
    </StyledIconList>
  );
};

export default QuickLinkCommon;

