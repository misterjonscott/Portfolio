export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1280px',
};

export const linebreak = {
  mobile: `
    @media (max-width: ${breakpoints.mobile}) {
      .break {
        display: block; /* On smaller screens, make it a block element */
      }
    }
  `,
  tablet: `
    @media (max-width: ${breakpoints.tablet}) {
      .break {
        display: block; /* On tablet screens, make it a block element */
      }
    }
  `,
  desktop: `
    @media (max-width: ${breakpoints.desktop}) {
      .break {
        display: block; /* On desktop screens, make it a block element */
      }
    }
  `
};