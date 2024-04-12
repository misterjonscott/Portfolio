import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import { Link } from 'react-router-dom';

const CaseStudyHeader = styled.div`
  display: flex;
  margin-bottom: 2em;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
  #brand {
    width: 315px;
    @media (max-width: ${breakpoints.mobile}) {
      margin: 0 auto;
    }
  }
  #title {
    flex-grow: 1;
    padding-left: 1em;
    @media (max-width: ${breakpoints.mobile}) {
      padding-left: 0;
    }
    h1 {
      font-size: 2em;
      margin: 0;
    }
  }
`;

const BackLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  svg {
    padding-right: 0.25em;
  }
`;

const Tags = styled.div`
  margin-top: 0.5em;
`;


const Tag = styled.span`
  background-color: ${props => props.theme.primaryPurple};
  color: #fff;
  border-radius: ${props => props.theme.smallBorderRadius};
  padding: 0.5em;
  margin-right: 0.25em;
`;

const CaseStudyContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: ${props => props.theme.bigBorderRadius};
  h2, h3, p {
    color: #333;
    margin: 0 0 0.5em;
  }
  section {
    margin-bottom: 3em;
  }
  img {
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
  div.center {
    text-align: center;
  }
`;

const TwoColumn = styled.div`
  display: flex;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
  & > div {
    flex: 1;
    padding-right: 1em;
    @media (max-width: ${breakpoints.mobile}) {
      padding-right: 0;
    }
    &:last-of-type {
      padding: 0;
    }
  }
  div.center {
    text-align: center;
  }
  img {
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
  .waveform {
    width: 500px;
    @media (max-width: ${breakpoints.mobile}) {
      width: 100%;
    }
  }
`;

const ThreeColumnBlocks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    grid-template-columns: unset;
  }
  .block {
    border: 2px solid ${props => props.theme.primaryPurple};
    border-radius: ${props => props.theme.smallBorderRadius};
    margin-right: 1em;
    padding: 0.5em;
    @media (max-width: ${breakpoints.mobile}) {
      width: calc(100% - 20px);
      margin-bottom: 20px;
    }
    &:last-child {
      margin-right: 0;
    }
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 1em;
      h4, svg {
        display: inline;
        font-size: 1.1em;
      }
      h4 {
        margin: 0 0 0 0.5em;
      }
    }
  }
`;

const CaseStudyGeofeedia = () => {
  return <div>
    <CaseStudyHeader>
      <div id="brand">
        <img src="./img/casestudies/CaseStudyGeofeediaActive.png" alt="Geofeedia Case Study" />
      </div>
      <div id="title">
        <h1>Data Management Case Study</h1>
        <BackLink to='/case-study'>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333008 5L5.33301 0V10L0.333008 5Z" fill="white"/>
          </svg>
          Back to Case Studies
        </BackLink>
        <Tags>
          <Tag>UX Designer</Tag> <Tag>UI Developer</Tag>
        </Tags>
      </div>
    </CaseStudyHeader>
    <CaseStudyContainer>
      <section>
        <h2>Introduction</h2>
        <p>Geofeedia was a location-based social media monitoring platform that provided real-time access to social media feeds based on location. It allowed users to monitor and analyze social media content, including posts, images, and videos, from specific geographic locations. Geofeedia's platform was used by various organizations, including law enforcement agencies, government agencies, and businesses, for purposes such as event monitoring, emergency response, market research, and brand management.</p>
        <div className='center'>
              <img src="./img/casestudies/geofeedia/geofeediaMain.png" alt="Geofeedia overview" />
        </div>
      </section>
      <section>
        <h2>Project Overview</h2>
        <TwoColumn>
          <div>
            <h3>The Challenge</h3>
            <p>Ensuring intuitive navigation and clear organization of complex data structures is crucial for usability. Balancing the need for comprehensive functionality with simplicity and ease of use is a constant challenge, requiring thoughtful design decisions. </p>

            <p>Scalability is another consideration, as the UI must accommodate increasing amounts of data and users without sacrificing performance. </p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>This can be achieved by employing principles of minimalist design, such as clear visual hierarchy, spacious layout, and concise labeling. Utilizing intuitive navigation patterns, such as a well-organized menu structure and contextual actions, helps streamline user interaction and reduce cognitive load. </p>

            <p>Furthermore, employing consistent design patterns and incorporating user feedback through iterative testing ensures continuous improvement and refinement of the UI. Overall, the solution lies in prioritizing user needs and optimizing the interface for efficiency, clarity, and ease of use.</p>
          </div>
        </TwoColumn>
      </section>
      <section>
        <TwoColumn>
          <div>
            <h2>Data Manager</h2>
            <p>This interface was designed to manage users’ saved locations, event recordings, and other collections of data.</p>
            <p>The design shows all key datapoints, hiding an actions menu behind a kebab for visual simplicity.</p>
            <p>We wanted to provide the end user with as much information and action as possible, without cluttering the screen.</p>
          </div>
          <div>
            <img src="./img/casestudies/geofeedia/dataManager.png" alt="Data Manager" />
          </div>
        </TwoColumn>
      </section>
      <section>
        <TwoColumn>
          <div>
            <img src="./img/casestudies/geofeedia/accountManager.png" alt="Account Manager" />
          </div>
          <div>
            <h2>Account Manager</h2>
            <p>Disabled accounts are hidden in a dedicated tab, and a large sortable scrolling table details a matrix of account details.</p>
            <p>Geofeedia customers were often resellers, and would need a way to manage the various clients they were supporting.</p>
          </div>
        </TwoColumn>
      </section>
      <section>
        <TwoColumn>
          <div>
            <h2>Account Impersonation</h2>
            <p>To better support our users, we created the capability to impersonate user accounts.  This meant we could debug issues and see exactly what the user was seeing in order to guide them to the appropriate solution.</p>
          </div>
          <div>
            <img src="./img/casestudies/geofeedia/accountImpersonation.png" alt="Account Impersonation" />
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>Users and Roles</h2>
        <p>These modals were designed to Edit/Create users, and roles.  The modal title changes based on the action the user is executing.  Fields use auto-completion and a selectable drop-down listing, and can support multiple entries if appropriate.</p>
        <TwoColumn>
          <div className='center'>
            <img src="./img/casestudies/geofeedia/userEdit.png" alt="User Editing" />
          </div>
          <div className='center'>
            <img src="./img/casestudies/geofeedia/roleEdit.png" alt="Role Editing" />
          </div>
        </TwoColumn>
      </section>
      <section>
        <h2>Sharing your View</h2>
        <p>Because Geofeedia's tool was intended to watch over geographic areas, we made it possible to share locations which were defined by shapes drawn on the map.  The user could bulk add invitations by permission level, and easily manage existing access to shared locations.  As you may notice, the location is also editable, so another user could fine-tune the location without need to update the associated group.</p>
        <div className='center'>
              <img src="./img/casestudies/geofeedia/shareLocation.png" alt="Location Sharing" />
        </div>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>The successful development of Account and Data management, along with Account impersonation functionalities, underscored Geofeedia's commitment to providing comprehensive and user-friendly solutions for location-based social media monitoring. By prioritizing simplicity, accessibility, and security in the design of its interfaces, Geofeedia ensured that users could seamlessly navigate complex data structures while efficiently managing user accounts and permissions. </p>
      </section>
    </CaseStudyContainer>
  </div>
};

export default CaseStudyGeofeedia;