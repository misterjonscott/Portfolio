import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';

const RecommendationContainer = styled.div`
  margin-bottom: 8em;
`;

const RecommendationBoxContainer = styled.div`
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
  @media (max-width: ${breakpoints.mobile}) {
    align-items: flex-end;
  }
`;

const RecommendationBox = styled.div`
  background-color: #fff;
  padding: .25em .5em;
  border-radius: 4px;
  margin: 0.5em 0.5em 0.5em 0;
  position: relative;
  /* Triangle */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -10px; /* Adjust as needed */
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 10px; /* Adjust size of the triangle */
    border-color: transparent transparent transparent #fff;
    @media (max-width: ${breakpoints.mobile}) {
      top: 90%;
      transform: translateY(-90%);
    }
  }
`;

const RecommendationPhoto = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const RecommendationBy = styled.p`
  font-size: 1.2em;
  margin: 0;
  font-weight: 600;
`;

const RecommendationTitle = styled.p`
  font-size: 0.9em;
  margin: 0 0 0.5em;
  color: #333;
`;

const RecommendationQuote = styled.p`
  font-size: 1em;
`;

const recommendations = [
  {
    photo: './img/recommendations/wayne.jpg',
    name: 'Wayne Klapwyk',
    title: 'Technical Product Manager at Skillable',
    quote: 'Jon is a thorough professional. He can take a project on spec and build out exactly what you are looking for or, if you prefer, can go totally creative and produce designs that are modern, innovative, and exactly what you need. His ability to work with you is something you just don\'t see every day. Give Jon a ring and ask him about what makes him tick. You won\'t be dissappointed.',
  },
  {
    photo: './img/recommendations/heidi.jpg',
    name: 'Heidi Gonzales',
    title: 'Senior Experience Specialist at Center for Internet Security',
    quote: 'I have had the pleasure of working with Jon for two years. He’s creative, dedicated and conscientious. When we collaborate on projects, he listens intently to determine project needs and delivers exceptional work efficiently and effectively. He grasps the big picture while capturing the details. That keen understanding sets Jon’s work apart and makes him a joy to partner on projects with. I feel fortunate to have had the opportunity to work with Jon. He is exceptionally talented.',
  },
  {
    photo: './img/recommendations/david.jpg',
    name: 'David Johnson',
    title: 'Growth Product Manager',
    quote: 'Jonathon is one of the most dynamic software engineers I\'ve had the privilege of working alongside. Intelligent, thoughtful, and thorough: Jon seeks to understand and solve problems efficiently and effectively. Always willing to fight for what\'s right and always willing to go the extra mile. Combining cutting-edge frontend practices with a strong design background, I\'d recommend Jon for any software development problem or project!',
  },
];

const Recommendations = () => {
  return <div id="recommendations">
    <h1>Recommendations</h1>
    <RecommendationContainer>
      {recommendations.map((recommendation, index) => (
        <RecommendationBoxContainer key={index}>
          <RecommendationBox>
            <RecommendationBy>{recommendation.name}</RecommendationBy>
            <RecommendationTitle>{recommendation.title}</RecommendationTitle>
            <RecommendationQuote>{recommendation.quote}</RecommendationQuote>
          </RecommendationBox>
          <RecommendationPhoto src={recommendation.photo} alt="" />
        </RecommendationBoxContainer>
      ))}
    </RecommendationContainer>
    </div>;
};

export default Recommendations;