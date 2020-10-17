import React, { useState } from 'react';
import { List, Row, Col } from 'antd';
import tomantje from '../tom-antje.jpg';

export default function Links() {

  const data = [
    {
      title: 'twitter',
      link: 'https://twitter.com/mrs_nextmatch'
    },
    {
      title: 'github',
      link: 'https://github.com/ntj'
    },
    {
      title: 'wikipedia',
      link: 'https://de.wikipedia.org/wiki/Benutzerin:Muffensausen'
    }
  ];

  return (
    <div>
      <Row>
        <Col span={8}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  title={<a href={item.link}>{item.title}</a>}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  )
};