import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Row, Col } from 'antd';
import Resume from './Resume';


const data = [
  {
    title: 'Teaching',
    tech: '',
    link: 'https://scratch.mit.edu/',
    text: 'Exploring visual languages and micro frameworks to teach concepts of programming.',
    avatar: './django.png'
  },
  {
    title: 'Viral Tools',
    tech: 'Django + Docker',
    link: '',
    text: 'A fully dockerized django application to order viruses produced at Janelia Research Campus and to manage incoming requests. Finished development so that the application could be rolled out to production. Provided ongoing support and maintenance.',
    avatar: './django.png'
  },
  {
    title: 'Lightsheet Pipeline',
    tech: 'Flask',
    link: 'https://github.com/JaneliaSciComp/lightsheet-pipeline',
    text: 'Flask app to make configuration of pre-built algorithms accessible to users with no or little programming experience.',
    avatar: './flask.png'
  },
  {
    title: 'Stable Split',
    tech: 'Flask',
    link: 'https://github.com/JaneliaSciComp/stable-split-cross-generator',
    text: 'Web interface to trigger celery tasks which called a script which took long to run. This way made algorithm accessible to users in form of a webpage.',
    avatar: './flask.png'
  },
  {
    title: 'Link and jump menu',
    tech: 'Drupal',
    link: 'https://www.hhmi.org/programs/hanna-h-gray-fellows-program#Fellows',
    text: 'Drupal module to include an alphabet of links to navigate easily through a list of names',
    avatar: ''
  },
  {
    title: 'Dynamics CRM',
    tech: 'Dynamics CRM',
    link: '',
    text: 'Built a record management system as part of a transition project to replace legacy software.',
    avatar: ''
  },
  {
    title: 'SharePoint',
    tech: 'SharePoint',
    link: '',
    text: 'Landing pages, configuration and administration of SharePoint sites',
    avatar: ''
  }
];

export default function Coding() {

  return (
    <div>
      <h3>Projects</h3>
      <Row>
        <Col span={8}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a href={item.link}>{item.title}</a>}
                  description={item.text}
                />
              </List.Item>
            )}
          />
        </Col>
        <Col>
          <Resume />
        </Col>
      </Row>
    </div>
  )
};