import React from 'react';
import Layout from 'components/layout';
import { Section, ServiceList, ServiceItem } from '../index.css';
import Header from 'components/header';
import ArrowDown from 'images/svg/arrow-circle.svg';
import Strategic from 'images/svg/strategic.svg';
import Cloud from 'images/svg/cloud.svg';
import Desktop from 'images/svg/desktop.svg';
import Project from 'images/svg/project.svg';
import Eye from 'images/svg/eye.svg';

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

const Services = () => (
  <Layout>
    <Section bgColor="#f1f1f1">
      <Header heading="SERVICES" subHeading="We thrive on complexity." />
      <div className="description-text">
        Software needs vary significantly. To cover the full spectrum of
        possibilities, we break our approach into these four distinct models.
        Each is customizable to fit your specific needs with an almost
        acrobatic-level of flexibility.
      </div>

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
  </Layout>
);

export default Services;
