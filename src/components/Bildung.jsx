import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Avatar, Row, Col } from 'antd';

const data = [
  {
    title: 'JavaScript Hero',
    link: 'https://www.jshero.net/en/home.html',
    text: 'Programmieren lernen mit JavaScript'
  },
  {
    title: 'Code IT',
    link: 'https://code-it-studio.de/',
    text: 'Programmieren lernen für Kinder'
  },
  {
    title: 'HackerRank',
    link: 'https://www.hackerrank.com/',
    text: 'Programmieren lernen für Erwachsene'
  },
  {
    title: 'Schul-Cloud',
    link: 'https://www.heise.de/newsticker/meldung/Bildungsministerium-oeffnet-Schul-Cloud-auch-fuer-Schulen-ohne-MINT-Schwerpunkt-4692669.html ',
    text: 'Bildungsministerium öffnet Schul-Cloud – auch für Schulen ohne MINT-Schwerpunkt  '
  },
  {
    title: 'Moodle',
    link: 'moodle.de',
    text: 'Moodle-Lernplattform'
  },
];

export default function Edu(){
    return(
        <div>
          <h3>Educational Resources</h3>
          <Row>
            <Col> 
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    // avatar={<Avatar src="" />}
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.text}
                    />
                </List.Item>
                )}
            />
            </Col>
          </Row>
        </div>
    )
};