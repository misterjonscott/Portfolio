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
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
    margin-bottom: 1em;
    &:nth-child(2n) {
      flex-direction: column;
    }
  }
`;

const GalleryGraphicContainer = styled.div`
  flex: 1;
  color: #fff;
  text-align: center;
  padding: 0 1em;
`;

const GalleryGraphic = styled.img`
  width: 100%;
`;

const GalleryTextContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 2em;
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

const MyRole = styled.p`
span {
  border-radius: 4px;
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
        <GalleryTextContainer>
          <h2>Skillable Studio's Dashboard</h2>
          <p>The redesigned dashboard offers Lab Developers a fresh and spacious interface, setting the stage for future enhancements. While retaining the functionality of the original dashboard, the redesign introduces new features, including a consolidated view for Currently Active/Saved labs and quick access to favorite labs. The inclusion of a widget summarizing Lab Advisor recommendations empowers users to optimize their labs efficiently, providing actionable insights directly within the dashboard interface.</p>
          <MyRole>
            <span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/SkillableStudioUserDashboard.png" />
        </GalleryGraphicContainer>
      </GallerySection>
      <GallerySection>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/SkillableStudentDashboard.png" />
        </GalleryGraphicContainer>
        <GalleryTextContainer>
          <h2>Student's Dashboard</h2>
          <p>The dashboard offers users convenient at-a-glance views, presenting weekly and monthly overviews of classes and assignments. Users can navigate to specific days for detailed information and access classes or assignments with a single click. The tool's automatic refresh feature ensures users stay updated without manual intervention, enhancing user experience.</p>
          <p>The dashboard streamlines access to active course assignments and labs, prioritizing the most relevant information for users. The inclusion of a rewards section adds a gamified element, allowing users to celebrate achievements and customize their experience, contributing to an engaging and user-friendly navigation experience.</p>
          <MyRole>
            <span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
      </GallerySection>
      <GallerySection>
        <GalleryTextContainer>
          <h2>Skillable Studio's Lab Advisor</h2>
          <p>Skillable Studio's Lab Advisor, introduced in beta, offers a comprehensive analysis of virtual labs, pinpointing areas for enhancement and offering actionable insights on best practices, potential configuration issues, and vital statistics. This tool assesses various aspects including cost efficiency, lab experience, operational excellence, performance, reliability, and security, providing users with valuable recommendations for optimization and improvement.</p>
          <MyRole>
            <span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/SkillableLabAdvisor.png" />
        </GalleryGraphicContainer>
      </GallerySection>
      <GallerySection>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/SkillableInstructorDashboard.png" />
        </GalleryGraphicContainer>
        <GalleryTextContainer>
          <h2>Instructor Dashboard</h2>
          <p>The Instructor Dashboard in Skillable TMS was heavily based on feedback and usage patterns. This design choice enhances efficiency by providing instructors with quick access to essential class-related information, freeing them to concentrate on their students rather than administrative tasks. Notably, the dashboard features an auto-refresh function, updating class assignments and metrics regularly without requiring manual browser refreshes, further streamlining the instructor experience.</p>
          <p>The Quick Links section offers convenient navigation to the most frequently accessed pages in Skillable TMS, catering to the needs of instructors. The graphical representation of daily class commitments and blockout days, coupled with interactive features such as revealing class names and specific timeslots, contributes to a user-friendly interface.</p>
          <MyRole>
            <span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
      </GallerySection>
      <GallerySection>
        <GalleryTextContainer>
          <h2>Optimization without changes</h2>
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
          <GalleryGraphic alt="" src="./img/gallery/finishline-rebuild.png" />
        </GalleryGraphicContainer>
      </GallerySection>
      <GallerySection>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/finishline-shoplocal.png" />
        </GalleryGraphicContainer>
        <GalleryTextContainer>
          <h2>Shopping Locally</h2>
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
      </GallerySection>
      <GallerySection>
        <GalleryTextContainer>
          <h2>Local Alerts</h2>
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
          <GalleryGraphic alt="" src="./img/gallery/geofeedia-alerts.png" />
        </GalleryGraphicContainer>
      </GallerySection>
      <GallerySection>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/geofeedia-manager.png" />
        </GalleryGraphicContainer>
        <GalleryTextContainer>
          <h2>Managing Your Accounts</h2>
          <p>An account management page is often critical when for effiency in security as well as centralized control.</p>
          <p>Our "Manage Accounts" introduced a streamlined interface aimed at simplifying the process of overseeing user accounts within 
            an organization. The design emphasized user-centric features such as searchable results, distinct categorization of active and 
            disabled listings, intuitive sorting functionalities, and convenient access to additional options through kebab menus.</p>
          <MyRole>
            <span>UI Developer</span><span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
      </GallerySection>
      <GallerySection>
        <GalleryTextContainer>
          <h2>Rebranding and Print Design</h2>
          <p>During my involvement with an engaging UI project for LCMS software, I was entrusted with the responsibility of conceptualizing 
            and designing new print materials. Among these were two distinct fliers crafted to be distributed during conventions, serving as 
            promotional tools to showcase the exceptional features and benefits of our product.</p>
          <MyRole>
            <span>Graphic Designer</span><span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/indigo-rebrand.png" />
        </GalleryGraphicContainer>
      </GallerySection>
      <GallerySection>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src="./img/gallery/lids-fanshops.png" />
        </GalleryGraphicContainer>
        <GalleryTextContainer>
          <h2>Team Shops with Authenticity</h2>
          <p>During my tenure at Lids, our operations included managing a series of team-specific online shops. Despite offering the same merchandise as the main website, these specialized sites garnered significant attention from fans seeking tailored experiences.</p>
          <p>The designs were meticulously crafted to integrate seamlessly within a component-based framework, while simultaneously reflecting the distinct visual identity of each affiliated organization.</p>
          <MyRole>
            <span>UI Developer</span><span>UX Designer</span>
          </MyRole>
        </GalleryTextContainer>
      </GallerySection>
    </GalleryContainer>;
};

export default Gallery;