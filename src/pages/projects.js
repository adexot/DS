import React from 'react';
import Layout from 'components/layout';
import Contact from 'components/contact';
import {
  Section,
  ServiceList,
  ServiceItem,
  ApproachItem,
  Div,
} from '../index.css';
import Header from 'components/header';
import Icon1 from 'images/svg/icon-1.svg';
import Icon2 from 'images/svg/icon-2.svg';
import Icon3 from 'images/svg/icon-3.svg';
import Icon4 from 'images/svg/icon-4.svg';
import Lifestyle from 'images/svg/lifestyle.svg';
import RealEstate from 'images/svg/real-estate.svg';
import Education from 'images/svg/education.svg';
import Finance from 'images/svg/finance.svg';
import Health from 'images/svg/health.svg';
import Commerce from 'images/svg/commerce.svg';

const services = [
  {
    logo: Lifestyle,
    title: 'LIFESTYLE',
  },
  {
    logo: RealEstate,
    title: 'REAL ESTATE',
  },
  {
    logo: Education,
    title: 'EDUCATION',
  },
  {
    logo: Finance,
    title: 'FINANCE',
  },
  {
    logo: Health,
    title: 'HEALTH',
  },
  {
    logo: Commerce,
    title: 'COMMERCE',
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

const Projects = () => (
  <Layout>
    <Section bgColor="#f1f1f1">
      <Header heading="APPROACH" subHeading="We're The Whole Package" />
      <div className="description-text">
        Software needs vary significantly. To cover the full spectrum of
        possibilities, we break our approach into these four distinct models.
        Each is customizable to fit your specific needs with an almost
        acrobatic-level of flexibility.
      </div>
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
    <Div image="https://res.cloudinary.com/adexot/image/upload/v1549299767/work-place_fwloca.jpg" />
    <Section bgColor="#fff">
      <Header
        heading="WHO WE WORK WITH"
        subHeading="1,000+ Projects Delivered "
      />
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
            </ServiceItem>
          );
        })}
      </ServiceList>
    </Section>
    <Contact />
  </Layout>
);

export default Projects;
