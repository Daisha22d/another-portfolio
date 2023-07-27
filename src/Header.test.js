// // Header.test.js
// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import Header from '../src/components/Header.js';

// // Mock react-responsive dependency
// jest.mock('react-responsive', () => ({
//     useMediaQuery: jest.fn().mockReturnValue(false),
//   }));
  
//   // Mock react-router-dom dependency
//   jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useLocation: jest.fn().mockReturnValue({ pathname: '/' }), // Mock the useLocation hook
//   }));

// test('renders header with logo and navigation links', () => {
//   // Render the Header component
//   render(<Header />);

//   // Test for the logo presence
//   const logoElement = screen.getByAltText('logo');
//   expect(logoElement).toBeInTheDocument();

//   // Test for the presence of navigation links
//   const homeLink = screen.getByRole('link', { name: 'Home' });
//   const aboutLink = screen.getByRole('link', { name: 'About' });
//   const projectsLink = screen.getByRole('link', { name: 'Projects' });
//   const resumeLink = screen.getByRole('link', { name: 'Resume' });

//   expect(homeLink).toBeInTheDocument();
//   expect(aboutLink).toBeInTheDocument();
//   expect(projectsLink).toBeInTheDocument();
//   expect(resumeLink).toBeInTheDocument();
// })