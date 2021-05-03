import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Nicole Saunders | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my portfolio
};

// HERO DATA
export const heroData = {
  title: 'Hello My Name Is',
  name: 'Nicole',
  subtitle: 'I am a Developer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profilepic1.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  paragraphFour: '',
  resume: 'https://docs.google.com/document/d/1x_91y2Zf3DgvrctarY-MsDrUH-EzPjgvGN4RsjjK47Y/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'imagineliferedesigned.jpg',
    title: 'Imagine Life Redesigned',
    info: 'Imagine Life Redesigned is a super fun project I have been working on since 2019. It is the website for my family YouTube channel',
    info2: 'Built with: WordPress',
    url: 'https://www.imagineliferedesigned.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'befreelancefree.jpg',
    title: 'Be Freelance Free',
    info: 'Be Freelance Free is a blog that was started to help guide other people who are interested in or new to freelancing.',
    info2: 'Built with: WordPress',
    url: 'https://www.befreelancefree.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sunandsandcastles.jpg',
    title: 'Sun and Sandcastles',
    info: 'There is nothing like the beach! Sun and Sandcastles was created to provide quality beachwear and home decor for the beach enthusiast or the vacationing family.',
    info2: 'Built with: WordPress',
    url: 'https://sunandsandcastles.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'arcadiadigitalmedia.jpg',
    title: 'Arcadia Digital Media',
    info: 'Arcadia Digital Media is another one of my portfolio websites. It is designed with small business clients in mind.',
    info2: 'Built with: WordPress',
    url: 'https://arcadiadigitalmedia.com',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'justbewholelifecoaching.jpg',
    title: 'Just Be Whole Life Coaching',
    info: 'Coach Alea Carter',
    info2: 'Built with: WordPress',
    url: 'https://justbewholelifecoaching.com',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nicostar26@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/development_ns',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/nicostar26',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/nicole-saunders',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/nicostar26',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
