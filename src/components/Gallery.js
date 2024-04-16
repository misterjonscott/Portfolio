import React, { useState } from 'react';
import { GalleryContainer, GallerySection, GalleryContent, GalleryTextContainer, MyRole, GalleryGraphicContainer, GalleryGraphic, GallerySupportingGraphicContainer } from './GalleryStyles';

const slides = [
  {
    title: "Skillable's Student Dashboard",
    description: "The student dashboard streamlines access to active course assignments and labs, prioritizing the most relevant information for users. The inclusion of a rewards section adds a gamified element, and customized course artwork increases familiarity.",
    role: "UX Designer",
    imageSrc: "./img/gallery/SkillableStudentDashboard.png",
    supportingImages: ["./img/gallery/skillable-student-dash-designspecs.png", "./img/gallery/skillable-student-dash-handoffspecs.png"]
  },
  {
    title: "Skillable Studio's Dashboard",
    description: "The redesigned dashboard offers Lab Developers a fresh and spacious interface, setting the stage for future enhancements while retaining the functionality of the original dashboard.  Most notably the new Lab Advisor recommendations widget empowers users to optimize their labs efficiently, providing actionable insights directly within the dashboard interface.",
    role: "UX Designer",
    imageSrc: "./img/gallery/SkillableStudioUserDashboard.png"
  },
  {
    title: "Skillable Studio's Lab Advisor",
    description: "Skillable Studio's Lab Advisor offers a comprehensive analysis of virtual labs, pinpointing areas for enhancement and offering actionable insights on best practices, potential configuration issues, and vital statistics. This tool assesses various aspects including cost efficiency, lab experience, operational excellence, performance, reliability, and security, providing users with valuable recommendations for optimization and improvement.",
    role: "UX Designer",
    imageSrc: "./img/gallery/SkillableLabAdvisor.png"
  },
  {
    title: "Optimization without changes",
    description: "I played a key role in development at Finish Line, where I consistently sought out opportunities for improvement. One of the critical areas I tackled was optimizing the product page, which had become burdened with unnecessary code over time, leading to sluggish loading times and a subpar user experience. By meticulously rebuilding the page while retaining its original design, I streamlined the codebase, eliminated redundancies, and ensured seamless compatibility between desktop and mobile views. As a result, the revamped product page now loads 50% faster, enhancing user satisfaction and driving improved performance metrics for the company.",
    role: "UI Developer",
    imageSrc: "./img/gallery/finishline-rebuild.png"
  },
  {
    title: "Shopping Locally",
    description: "During the early stages of the pandemic, Finish Line identified a crucial need to empower customers with the ability to conveniently search their local store's inventory for same-day pickup—a vital service amid evolving health and safety concerns. Although this functionality could be categorized as a filter, I advocated for treating it as a distinct feature due to its strategic importance and unique user experience implications.",
    role: "UI Developer",
    imageSrc: "./img/gallery/finishline-shoplocal.png"
  },
  {
    title: "Local Alerts",
    description: "Geofeedia revolutionized social media monitoring by offering a sophisticated location-based search tool tailored for geotagged social media posts. With a simple lasso gesture on the map interface, users could effortlessly uncover relevant posts within specific geographic regions, providing invaluable insights and real-time data. This innovative tool empowered users to create personalized alerts tailored to their specific needs and preferences. By offering customizable parameters and immediate actionability, the alert wizard streamlined the process of monitoring and responding to relevant social media content, ultimately amplifying the platform's effectiveness and utility for users.",
    role: "UI Developer / UX Designer",
    imageSrc: "./img/gallery/geofeedia-alerts.png"
  },
  {
    title: "Managing Your Accounts",
    description: "An account management page is often critical for efficiency in security as well as centralized control. Our 'Manage Accounts' introduced a streamlined interface aimed at simplifying the process of overseeing user accounts within an organization. The design emphasized user-centric features such as searchable results, distinct categorization of active and disabled listings, intuitive sorting functionalities, and convenient access to additional options through kebab menus.",
    role: "UI Developer / UX Designer",
    imageSrc: "./img/gallery/geofeedia-manager.png"
  },
  {
    title: "Rebranding and Print Design",
    description: "During my involvement with an engaging UI project for LCMS software, I was entrusted with the responsibility of conceptualizing and designing new print materials. Among these were two distinct fliers crafted to be distributed during conventions, serving as promotional tools to showcase the exceptional features and benefits of our product.",
    role: "Graphic Designer / UX Designer",
    imageSrc: "./img/gallery/indigo-rebrand.png"
  },
  {
    title: "Team Shops with Authenticity",
    description: "During my tenure at Lids, our operations included managing a series of team-specific online shops. Despite offering the same merchandise as the main website, these specialized sites garnered significant attention from fans seeking tailored experiences. The designs were meticulously crafted to integrate seamlessly within a component-based framework, while simultaneously reflecting the distinct visual identity of each affiliated organization.",
    role: "UI Developer / UX Designer",
    imageSrc: "./img/gallery/lids-fanshops.png"
  }
];

const renderCard = (title, description, role, imageSrc, supportingImages = []) => (
  <GallerySection>
    <h2>{title}</h2>
    <GalleryContent>
      <GalleryTextContainer>
        <p>{description}</p>
        {role && (
          <MyRole>
            <span>{role}</span>
          </MyRole>
        )}
      </GalleryTextContainer>
      <GalleryGraphicContainer>
        <GalleryGraphic alt="" src={imageSrc} />
      </GalleryGraphicContainer>
    </GalleryContent>
    {supportingImages.length > 0 && (
      <GallerySupportingGraphicContainer>
        {supportingImages.map((src, index) => (
          <GalleryGraphic key={index} alt="" src={src} />
        ))}
      </GallerySupportingGraphicContainer>
    )}
  </GallerySection>
);


const Gallery = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const renderCard = ({ title, description, role, imageSrc, supportingImages = [] }) => (
    <GallerySection>
      <h2>{title}</h2>
      <GalleryContent>
        <GalleryTextContainer>
          <p>{description}</p>
          {role && (
            <MyRole>
              <span>{role}</span>
            </MyRole>
          )}
        </GalleryTextContainer>
        <GalleryGraphicContainer>
          <GalleryGraphic alt="" src={imageSrc} />
        </GalleryGraphicContainer>
      </GalleryContent>
      {supportingImages.length > 0 && (
        <GallerySupportingGraphicContainer>
          {supportingImages.map((src, index) => (
            <GalleryGraphic key={index} alt="" src={src} />
          ))}
        </GallerySupportingGraphicContainer>
      )}
    </GallerySection>
  );

  return (
    <GalleryContainer id="gallery">
      <h1>Projects Showcase</h1>
      {renderCard(slides[currentSlideIndex])}
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </GalleryContainer>
  );
};

export default Gallery;