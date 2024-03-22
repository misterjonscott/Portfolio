import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../breakpoints';
import { Link } from 'react-router-dom';

const WaitHand = styled.div`
  width: 301px;
  height: 337px;
  margin: 2em auto;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="301" height="337" viewBox="0 0 301 337" fill="none"><path d="M235.22 191.048V61.0753C235.22 52.2456 228.156 45.1819 219.327 45.1819C218.62 45.1819 218.267 45.1819 217.561 45.1819C209.437 45.8883 203.08 53.3052 203.08 62.1349V150.785C203.08 154.317 199.901 157.495 196.369 157.495C192.484 157.495 189.659 154.317 189.659 150.785V35.2926C189.659 25.4034 180.476 17.6333 170.587 19.3992C162.817 20.812 157.872 27.8757 157.872 35.6458V150.785C157.872 154.317 154.693 157.495 151.161 157.495C147.63 157.495 144.451 154.317 144.451 150.785V16.5737C144.451 6.68448 135.621 -1.08564 125.379 0.680295C117.255 2.44623 111.958 9.50997 111.958 17.2801V150.785C111.958 154.317 108.779 157.495 105.247 157.495C101.362 157.495 98.5365 154.317 98.5365 150.785V35.2926C98.5365 25.4034 89.7068 17.6333 79.4644 19.3992C71.6943 20.812 66.7497 27.8757 66.7497 35.6458V172.682C66.7497 177.627 60.3923 179.746 57.2136 175.861L32.4905 143.015C30.0182 139.836 26.8395 137.364 22.9545 135.951C17.6566 134.538 12.3588 135.245 8.12059 138.423C0.70366 143.368 -1.41546 153.257 2.4696 161.38L55.4477 265.571C61.805 278.285 71.6943 288.881 83.7027 296.298C95.711 303.715 109.838 307.6 123.966 307.6H158.225C160.344 307.6 162.11 307.6 164.229 307.247C158.578 296.298 155.4 283.936 155.4 270.515C155.4 227.073 191.072 191.048 235.22 191.048Z" fill="white"/><path d="M235.22 205.882C199.195 205.882 169.88 235.197 169.88 271.222C169.88 307.247 199.195 336.208 235.22 336.208C271.245 336.208 300.56 306.894 300.56 270.869C300.56 234.843 271.245 205.882 235.22 205.882ZM235.22 321.374C207.318 321.374 184.714 298.77 184.714 270.869C184.714 242.967 207.671 220.716 235.22 220.716C263.122 220.716 285.726 243.32 285.726 271.222C285.726 299.123 263.122 321.374 235.22 321.374Z" fill="white"/><path d="M257.118 263.452H242.637V240.848C242.637 236.609 239.458 233.431 235.22 233.431C230.982 233.431 227.803 236.609 227.803 240.848V270.868C227.803 275.107 230.982 278.285 235.22 278.285H256.764C261.003 278.285 264.181 275.107 264.181 270.868C264.181 266.63 261.003 263.452 257.118 263.452Z" fill="white"/></svg>');
`;

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

const CaseStudyIndigo = () => {
  return <div>
    <CaseStudyHeader>
      <div id="brand">
        <img src="./img/casestudies/CaseStudyIndigoActive.png" alt="Indigo Case Study Active" />
      </div>
      <div id="title">
        <BackLink to='/case-study'>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.333008 5L5.33301 0V10L0.333008 5Z" fill="white"/>
          </svg>
          Back to Case Studies
        </BackLink>
      </div>
      <WaitHand />
    </CaseStudyHeader>
  </div>
};

export default CaseStudyIndigo;