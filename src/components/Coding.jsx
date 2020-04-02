import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Avatar, Row, Col, Space } from 'antd';
import CodingCard from './CodingCard';
import Django from './Django';
import Flask from './Flask';
import ReactJS from './ReactJS';
import CRM from './CRM';
import SharePoint from './SharePoint';
import Docker from './Docker';
import { getConfigFileParsingDiagnostics } from 'typescript';

const data = [
  {
    title: 'Maria Klawe',
  },
];

export default function Coding(){
    return(
        <div>
            <h3>Coding</h3>
            <Row>
                <Col span={16}>
                    I'm developing web apps for the most parts the last couple of years. I really enjoy modeling
                    portions of the real world and building applications, which give the user new ways of exploring their data.<br /><br />
                    Here I describe in a few words what I find exciting with each technology. Don't expect this page to be complete anyhow.
                </Col>
            </Row>
            <br/><br/>
            <Row>
                <Col span={8}>
                    <CodingCard title="Flask" link="https://flask.palletsprojects.com/en/1.1.x/"  >
                        <Flask />
                    </CodingCard>
                </Col>
                <Col span={8}>
                    <CodingCard title="Django" link="https://www.djangoproject.com/">
                        <Django />
                    </CodingCard>    
                </Col>
            </Row>
            <br/>
            <Row>
                <Col span={8}>
                <CodingCard title="ReactJS" link="https://reactjs.org/">
                        <ReactJS />
                    </CodingCard>
                </Col>
                <Col span={8}>
                    <CodingCard title="Docker" link="https://hub.docker.com/">
                        <Docker />
                    </CodingCard>
                </Col>
            </Row>
        </div>
    )
};