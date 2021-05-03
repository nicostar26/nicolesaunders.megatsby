import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'My name is Nicole. I like creating things for the web. I live in Niceville, Florida but love working with people all over the world. I am fascinated by technology and love contributing to making the world a better, safer, and more convenient place for all of us.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I started working in Web Development before I even knew what it was called. Back when LiveJournal was a thing, I thought it was amazing how people could use HTML and CSS to customize their LiveJournal profiles to something unique and out of the box. That started my journey.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Since then, I have learned HTML, CSS, and JavaScript. I wish I would have saved some of my earlier works as I didn/t take Web Development seriously until around 2017. Along the way, I have picked up several different technologies including PHP and some JavaScript frameworks like React and Gatsby (what this portfolio is built with).'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || 'Take a look around! If you like what you see, I would love to hear from you!'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
