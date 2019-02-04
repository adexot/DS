import React, { Fragment } from 'react';
import Header from 'components/header';
import {
  Section,
  TopSection,
  ServiceList,
  ServiceItem,
  // ApproachItem,
} from '../index.css';
import ArrowDown from 'images/svg/arrow-circle.svg';
import Strategic from 'images/svg/strategic.svg';
import Cloud from 'images/svg/cloud.svg';
import Desktop from 'images/svg/desktop.svg';
import Project from 'images/svg/project.svg';
import Eye from 'images/svg/eye.svg';
import Icon1 from 'images/svg/icon-1.svg';
import Icon2 from 'images/svg/icon-2.svg';
import Icon3 from 'images/svg/icon-3.svg';
import Icon4 from 'images/svg/icon-4.svg';
import TopImage from 'images/svg/top.svg';
import Button from 'components/button';

const services = [
  {
    logo: Strategic,
    title: 'Strategic Consulting',
  },
  {
    logo: Eye,
    title: 'User Experience',
  },
  {
    logo: Cloud,
    title: 'Cloud Services',
  },
  {
    logo: Project,
    title: 'Project Management',
  },
  {
    logo: Desktop,
    title: 'Web Development',
  },
  {
    logo: Eye,
    title: 'Mobile Development',
  },
  {
    logo: Project,
    title: 'Quality Assurance',
  },
  {
    logo: Strategic,
    title: 'Continuation Engineering',
  },
];

const approaches = [
  {
    bgColor: '#03a8f5',
    icon: Icon1,
    heading: 'Discover',
    subHeading: 'Create Your Blueprint',
  },
  {
    bgColor: '#5fe0b5',
    icon: Icon2,
    heading: 'Build',
    subHeading: 'Develop Your Solution',
  },
  {
    bgColor: '#ff6d6b',
    icon: Icon3,
    heading: 'Staff',
    subHeading: 'Amplify Your Resources',
  },
  {
    bgColor: '#ff9e64',
    icon: Icon4,
    heading: 'Maintain',
    subHeading: 'Support Your Software',
  },
];

const Home = () => (
  <Fragment>
    <TopSection>
      <div>
        <Header
          align="left"
          subHeading="Differential Solutions"
          description="We make alot of difference in the way solve problems, giving you the best solution you can get."
          button={{
            text: 'Get Started',
            href: '/projects',
          }}
        />
        <TopImage />
      </div>
    </TopSection>
    <Section>
      <Header subHeading=" Core Project Competencies " />
      <ServiceList>
        {services.map((item, index) => {
          const TagName = item.logo;
          return (
            <ServiceItem key={index}>
              <TagName />
              <h3>{item.title}</h3>
              <ArrowDown />
            </ServiceItem>
          );
        })}
      </ServiceList>
    </Section>
    {/* <Section bgColor="#f1f1f1">
      <Header heading="Explore" subHeading="Our Project Approach" />
      <ServiceList>
        {approaches.map((item, index) => {
          const TagName = item.icon;
          return (
            <ApproachItem key={index} bgColor={item.bgColor}>
              <div>
                <TagName />
                <h3>{item.heading}</h3>
                <p>{item.subHeading}</p>
              </div>
            </ApproachItem>
          );
        })}
      </ServiceList>
    </Section> */}
    <Section bgColor="#fff">
      {approaches.map((item, index) => {
        const TagName = item.icon;
        return (
          <div key={index} className="flex-row">
            <div className="flex-item-image">
              <TagName />
            </div>
            <div className="flex-item-content">
              <h3>{item.heading}</h3>
              <p>
                Adipisicing qui ea sit enim id mollit. Enim irure adipisicing
                nulla nostrud tempor dolore nisi magna sunt adipisicing ipsum
                excepteur. Mollit dolor reprehenderit exercitation amet proident
                nostrud sunt do sunt ut. Amet deserunt sint adipisicing commodo
                fugiat. Nostrud voluptate do mollit dolor veniam laborum
                aliquip. Officia eiusmod magna occaecat cillum cupidatat cillum
                commodo consectetur Lorem nisi mollit commodo deserunt culpa.
                Eiusmod reprehenderit duis amet incididunt enim eiusmod veniam
                commodo ad incididunt aliquip id irure.
              </p>
            </div>
          </div>
        );
      })}
    </Section>
    <Section bgColor="#f5f9fa">
      <div className="contact-us-intro">
        <span>Have an idea to bring to life?</span>
        <Button href="/contact" text="Get Started" />
      </div>
    </Section>
  </Fragment>
);

export default Home;
