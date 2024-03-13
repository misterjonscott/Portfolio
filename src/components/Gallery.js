import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const GalleryContainer = styled.div`
  margin-bottom: 8em;
  @media (max-width: ${breakpoints.mobile}) {
    // padding-top: 8em;
  }
`;

const GallerySection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0 1em;
  border-radius: ${props => props.theme.smallBorderRadius};
  h2 {
    color: #333;
    font-size: 1.2em;
    align-self: flex-start;
  }
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    margin-bottom: 1em;
  }
`;

const GalleryContent = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
  }
`;

const GalleryGraphicContainer = styled.div`
  flex: 1;
  text-align: center;
`;

const GalleryGraphic = styled.img`
  width: 100%;
  border: 1px solid #333;
  border-radius: 3px;
  &.old {
    border-radius: 30px;
  }
`;

const GalleryTextContainer = styled.div`
  flex: 1;
  padding-right: 1em;
  h1, h2, h3 {
    color: #333;
    margin: 0 0 .25em;
  }
  p {
    margin-top: 0;
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin: 2em 0 .5em;
  }
`;

const GallerySupportingGraphicContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 1em;
  border-radius: ${props => props.theme.smallBorderRadius};
  margin-top: 0.5em;
  img {
    width: 50%;
    height: auto;
    max-width: 100%;
    border: 0;
    @media (max-width: ${breakpoints.mobile}) {
      flex-basis: 100%;
    }
  }
`;

const MyRole = styled.p`
span {
  border-radius: ${props => props.theme.smallBorderRadius};
  background-color: teal;
  color: #fff;
  padding: .25em;
  margin-right: .5em;
}
`;

const Gallery = () => {
  return <GalleryContainer id="gallery">
    <h1>Projects Showcase</h1>
    <GallerySection>
      <h2>Skillable's Instructor Dashboard</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>The Instructor Dashboard in Skillable TMS was heavily based on feedback and usage patterns. We enhanced efficiency by providing instructors with quick access to essential session-related information, freeing them to concentrate on their students rather than administrative tasks.</p>
          <ul>
            <li>
              The Quick Links section in the top left offers convenient navigation to the most frequently accessed pages in Skillable TMS.</li>
            <li>
              Tools and information related to each session are available via a tabbed interface that also displays the most regularly requested session-specific information.</li>
            <li>
              The week-at-a-glance view helps the instructor plan their week.  Selecting a session from this interface will open that session's details in a new tab.</li>
            <li>
              The month-at-a-glance feature allows a broad view, with simple navigation through time, and displays the current date, blocked days, and icons to signify scheduled sessions.</li>
          </ul>
          <MyRole>
            <span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/SkillableInstructorDashboard.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
      <GallerySupportingGraphicContainer>
        <GalleryGraphic alt="" src="./img/gallery/skillable-instructor-dash-sessions.png" />
        <GalleryGraphic alt="" src="./img/gallery/skillable-instructor-dash-calendar.png" />
      </GallerySupportingGraphicContainer>
    </GallerySection>
    <GallerySection>
      <h2>Skillable's Student Dashboard</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>The student dashboard streamlines access to active course assignments and labs, prioritizing the most relevant information for users. The inclusion of a rewards section adds a gamified element, and customized course artwork increases familiarity.</p>
          <ul>
            <li>Empowers educators to customize the course graphics for fast and easy recognition</li>
            <li>Clear view of today's classes, and active course assignments, including due dates for active assignments</li>
            <li>Week-at-a-glance schedule helps the learner easily plan their schedule</li>
            <li>Quick access to input a training key to unlock new courses</li>
            <li>Badges offer a gamification factor and are displayed prominently as such.</li>
          </ul>
          <MyRole>
            <span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/SkillableStudentDashboard.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
      <GallerySupportingGraphicContainer>
        <GalleryGraphic alt="" src="./img/gallery/skillable-student-dash-designspecs.png" />
        <GalleryGraphic alt="" src="./img/gallery/skillable-student-dash-handoffspecs.png" />
      </GallerySupportingGraphicContainer>
    </GallerySection>
    <GallerySection>
      <h2>Skillable Studio's Dashboard</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>The redesigned dashboard offers Lab Developers a fresh and spacious interface, setting the stage for future enhancements while retaining the functionality of the original dashboard.  Most notably the new Lab Advisor recommendations widget empowers users to optimize their labs efficiently, providing actionable insights directly within the dashboard interface.</p>
          <ul>
            <li>Create a new lab directly from the dashboard</li>
            <li>A consolidated view for Currently Active/Saved labs and quick access to favorite labs</li>
            <li>Search lab profiles or active lab instances</li>
            <li>Easily reach any of the lab instances you've recently used</li>
          </ul>
          <MyRole>
            <span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/SkillableStudioUserDashboard.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
    </GallerySection>
    <GallerySection>
      <h2>Skillable Studio's Lab Advisor</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>Skillable Studio's Lab Advisor offers a comprehensive analysis of virtual labs, pinpointing areas for enhancement and offering actionable insights on best practices, potential configuration issues, and vital statistics. This tool assesses various aspects including cost efficiency, lab experience, operational excellence, performance, reliability, and security, providing users with valuable recommendations for optimization and improvement.</p>
          <ul>
            <li>View by Active, postponed or dismissed issues, because not everything can be fixed today, and filter by impact level to ensure laser focus to critical issues</li>
            <li>Clear indication of impact level with color coding</li>
            <li>Description of potential benefits to help communicate our rationale and help users better understand how to improve their labs</li>
            <li>Potential actions are presented inline, helping our users work more efficiently</li>
          </ul>
          <MyRole>
            <span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/SkillableLabAdvisor.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
    </GallerySection>
    <GallerySection>
      <h2>Optimization without changes</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>I played a key role in development at Finish Line, where I consistently sought out opportunities for improvement. One of the 
            critical areas I tackled was optimizing the product page, which had become burdened with unnecessary code over time, leading 
            to sluggish loading times and a subpar user experience. By meticulously rebuilding the page while retaining its original design, 
            I streamlined the codebase, eliminated redundancies, and ensured seamless compatibility between desktop and mobile views. As a 
            result, the revamped product page now loads 50% faster, enhancing user satisfaction and driving improved performance metrics for 
            the company.</p>
            <MyRole>
              <span>UI Developer</span>
            </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic className="old" alt="Finish Line rebuilt product page graphic" src="./img/gallery/finishline-rebuild.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
    </GallerySection>
    <GallerySection>
      <h2>Shopping Locally</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>During the early stages of the pandemic, Finish Line identified a crucial need to empower customers with the ability to conveniently
            search their local store's inventory for same-day pickup—a vital service amid evolving health and safety concerns. Although this 
            functionality could be categorized as a filter, I advocated for treating it as a distinct feature due to its strategic importance 
            and unique user experience implications.</p>
          <p>The successful deployment of this feature not only addressed an urgent customer need but also positioned Finish Line as a 
            forward-thinking and customer-centric brand during a challenging period. Our efforts culminated in tangible benefits, including 
            increased customer satisfaction, heightened brand loyalty, and enhanced operational efficiency for the company.</p>
            <MyRole>
              <span>UI Developer</span>
            </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic className="old" alt="Finish Line Shop Local graphic" src="./img/gallery/finishline-shoplocal.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
    </GallerySection>
    <GallerySection>
      <h2>Local Alerts</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>Geofeedia revolutionized social media monitoring by offering a sophisticated location-based search tool tailored for geotagged 
            social media posts. With a simple lasso gesture on the map interface, users could effortlessly uncover relevant posts within 
            specific geographic regions, providing invaluable insights and real-time data.</p>
          <p>This innovative tool empowered users to create personalized alerts tailored to their specific needs and preferences. By offering 
            customizable parameters and immediate actionability, the alert wizard streamlined the process of monitoring and responding to 
            relevant social media content, ultimately amplifying the platform's effectiveness and utility for users.</p>
          <MyRole>
            <span>UI Developer</span><span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic className="old" alt="Geofeedia custom alerts interface" src="./img/gallery/geofeedia-alerts.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
    </GallerySection>
    <GallerySection>
      <h2>Managing Your Accounts</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>An account management page is often critical when for effiency in security as well as centralized control.</p>
          <p>Our "Manage Accounts" introduced a streamlined interface aimed at simplifying the process of overseeing user accounts within 
            an organization. The design emphasized user-centric features such as searchable results, distinct categorization of active and 
            disabled listings, intuitive sorting functionalities, and convenient access to additional options through kebab menus.</p>
          <MyRole>
            <span>UI Developer</span><span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic className="old" alt="Geofeedia data manager" src="./img/gallery/geofeedia-manager.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
    </GallerySection>
    <GallerySection>
      <h2>Rebranding and Print Design</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>During my involvement with an engaging UI project for LCMS software, I was entrusted with the responsibility of conceptualizing 
            and designing new print materials. Among these were two distinct fliers crafted to be distributed during conventions, serving as 
            promotional tools to showcase the exceptional features and benefits of our product.</p>
          <MyRole>
            <span>Graphic Designer</span><span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic className="old" alt="Indigo Biosystems Rebrand" src="./img/gallery/indigo-rebrand.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
    </GallerySection>
    <GallerySection>
      <h2>Team Shops with Authenticity</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>During my tenure at Lids, our operations included managing a series of team-specific online shops. Despite offering the same merchandise as the main website, these specialized sites garnered significant attention from fans seeking tailored experiences.</p>
          <p>The designs were meticulously crafted to integrate seamlessly within a component-based framework, while simultaneously reflecting the distinct visual identity of each affiliated organization.</p>
          <MyRole>
            <span>UI Developer</span><span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic className="old" alt="Lids Fan Shops Graphic" src="./img/gallery/lids-fanshops.png" />
        </GalleryGraphicContainer>
      </GalleryContent>
    </GallerySection>
  </GalleryContainer>;
};

export default Gallery;