import React, { Fragment } from 'react';
import Header from 'components/header';
import {
  Section,
  TopSection,
  ServiceList,
  ServiceItem,
  ApproachItem,
} from './index.css';
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
      <Header
        subHeading="Differential Solutions"
        description="We make your Innovations go Live"
      />
    </TopSection>
    <Section>
      <Header heading="SERVICES" subHeading=" Core Project Competencies " />
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
    <Section bgColor="#f1f1f1">
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
    </Section>
  </Fragment>
);

export default Home;
