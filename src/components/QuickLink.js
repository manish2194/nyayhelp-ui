import React from "react";
import styled from "styled-components";
import QuickLinkCommon from "./Common/QuickLinkCommon";
import {
  faCog,
  faFolder,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

const QuickLinkContainer = styled.div`
  // background: #ffffff00;
  // padding: 20px;
  // border-radius: 10px;
  // box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const QuickLinkHeading = styled.h3`
  font-size: 1rem;
  margin-bottom: 2px;
  text-align: left;
  color: #333;
`;

const QuickLinkGrid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  text-align: center;
`;

function QuickLink() {
  const iconData = [
    { icon: faPhone, label: 'About', link: "/" },
    { icon: faCog, label: 'Blogs', link: "/blog" },
    { icon: faFolder, label: 'Forums', link: "/forum" },
    { icon: faEnvelope, label: 'Education', link: "/education" },
    { icon: faEnvelope, label: 'Internship', link: "/internship" }
  ];

  return (
    <QuickLinkContainer>
      <QuickLinkHeading>Quick Links</QuickLinkHeading>
      <QuickLinkGrid>
        <QuickLinkCommon iconData={iconData} />
      </QuickLinkGrid>
    </QuickLinkContainer>
  );
}

export default QuickLink;