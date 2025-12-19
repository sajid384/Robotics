import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Embodied Intelligence',
    description: (
      <>
        Learn about the principles of embodied intelligence and how physical interaction
        shapes intelligent behavior in humanoid robots.
      </>
    ),
  },
  {
    title: 'ROS 2 Integration',
    description: (
      <>
        Understand how ROS 2 serves as the nervous system for humanoid robotics systems.
      </>
    ),
  },
  {
    title: 'Sim-to-Real Transfer',
    description: (
      <>
        Explore techniques for transferring learned behaviors from simulation to real-world robots.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}