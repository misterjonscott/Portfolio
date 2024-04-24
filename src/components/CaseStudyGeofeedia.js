import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as CaseStudyStyle from './CaseStudyStyles';

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

const CaseStudyGeofeedia = () => {
  const [refDataManager, DataManagerisInView] = useInView({
      triggerOnce: true,
      threshold: 0.2, 
  });
  const [refAccountManager, AccountManagerisInView] = useInView({
      triggerOnce: true,
      threshold: 0.1, 
  });
  const [refAccountImpersonation, AccountImpersonationisInView] = useInView({
      triggerOnce: true,
      threshold: 0.2, 
  });
  const [refUsersAndRoles, UsersAndRolesisInView] = useInView({
      triggerOnce: true,
      threshold: 0.2, 
  });
  const [refSharing, SharingisInView] = useInView({
      triggerOnce: true,
      threshold: 0.2, 
  });

  return <div>
    <CaseStudyStyle.CaseStudyHeader>
      <div id="title">
        <h1>Data Management</h1>
        <CaseStudyStyle.BackLink to='/case-study'>
          <svg width="6" height="10" viewBox="0 0 6 10" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333008 5L5.33301 0V10L0.333008 5Z" />
          </svg>
          Back to Case Studies
        </CaseStudyStyle.BackLink>
        <CaseStudyStyle.Tags>
          <CaseStudyStyle.Tag>UX Designer</CaseStudyStyle.Tag> <CaseStudyStyle.Tag>UI Developer</CaseStudyStyle.Tag>
        </CaseStudyStyle.Tags>
      </div>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        id='brand'
      >
        <img src="./img/casestudies/CaseStudyGeofeediaActive.png" alt="Geofeedia Case Study" />
      </motion.div>
    </CaseStudyStyle.CaseStudyHeader>
    <CaseStudyStyle.CaseStudyContainer>
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
            <p>As a UX engineer, I love wrangling complex data structures into intuitive interfaces.  The trick? Balancing all the fancy features users crave with a design that's simple and, dare I say, delightful to use.</p>

            <p>But it's not all fun and games.  We gotta make sure the UI scales like a champ, handling more data and users without a meltdown.  Think of it as building a UX fortress - strong, user-friendly, and ready for anything!</p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>Users hate clutter! So, I championed minimalist design for our UI: clear hierarchy, spacious layouts, and concise labels. Think of it as Marie Kondo for interfaces! But minimalism isn't enough. Intuitive navigation (think well-organized menus and context-sensitive actions) keeps interactions smooth. The secret weapon? User feedback. We constantly refine the UI based on what users tell us.</p>
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
          <motion.div
              ref={refDataManager}
              initial={{ x: '100%', opacity: 0 }}
              animate={DataManagerisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <img src="./img/casestudies/geofeedia/dataManager.png" alt="Data Manager" />
          </motion.div>
        </TwoColumn>
      </section>
      <section>
        <TwoColumn>
        <motion.div
            ref={refAccountManager}
            initial={{ x: '-100%', opacity: 0 }}
            animate={AccountManagerisInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
            <img src="./img/casestudies/geofeedia/accountManager.png" alt="Account Manager" />
          </motion.div>
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
          <motion.div
              ref={refAccountImpersonation}
              initial={{ x: '100%', opacity: 0 }}
              animate={AccountImpersonationisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <img src="./img/casestudies/geofeedia/accountImpersonation.png" alt="Account Impersonation" />
          </motion.div>
        </TwoColumn>
      </section>
      <section>
        <h2>Users and Roles</h2>
        <p>These modals were designed to Edit/Create users, and roles.  The modal title changes based on the action the user is executing.  Fields use auto-completion and a selectable drop-down listing, and can support multiple entries if appropriate.</p>
        <TwoColumn>
        <motion.div
            ref={refUsersAndRoles}
            initial={{ x: '-100%', opacity: 0 }}
            animate={UsersAndRolesisInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className='center'
        >
            <img src="./img/casestudies/geofeedia/userEdit.png" alt="User Editing" />
          </motion.div>
          <motion.div
              ref={refUsersAndRoles}
              initial={{ x: '100%', opacity: 0 }}
              animate={UsersAndRolesisInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              className='center'
          >
            <img src="./img/casestudies/geofeedia/roleEdit.png" alt="Role Editing" />
          </motion.div>
        </TwoColumn>
      </section>
      <section>
        <h2>Sharing your View</h2>
        <p>Because Geofeedia's tool was intended to watch over geographic areas, we made it possible to share locations which were defined by shapes drawn on the map.  The user could bulk add invitations by permission level, and easily manage existing access to shared locations.  As you may notice, the location is also editable, so another user could fine-tune the location without need to update the associated group.</p>
        <motion.div
            ref={refSharing}
            initial={{ y: '100%', opacity: 0 }}
            animate={SharingisInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className='center'
        >
              <img src="./img/casestudies/geofeedia/shareLocation.png" alt="Location Sharing" />
        </motion.div>
      </section>
      <section>
        <h2>Conclusion</h2>
        <p>The successful development of Account and Data management, along with Account impersonation functionalities, underscored Geofeedia's commitment to providing comprehensive and user-friendly solutions for location-based social media monitoring. By prioritizing simplicity, accessibility, and security in the design of its interfaces, Geofeedia ensured that users could seamlessly navigate complex data structures while efficiently managing user accounts and permissions. </p>
      </section>
    </CaseStudyStyle.CaseStudyContainer>
  </div>
};

export default CaseStudyGeofeedia;