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
            <Row>
                I'm developing web apps for the most parts the last couple of years. I really enjoy modeling
                portions of the real world into a database scheme and building applications which give the user new ways of exploring their data.
            </Row>
            <br/>
            <Row>
                Here I describe in a few words what I find exciting with each technology. Don't expect this page to be complete anyhow.
            </Row>
            <br/>
            <Row>
                <Col span={8}>
                    <CodingCard title="Flask">
                        <Flask />
                    </CodingCard>
                </Col>
                <Col span={8}>
                    <CodingCard title="Django">
                        <Django />
                    </CodingCard>    
                </Col>
                <Col span={8}>
                    <CodingCard title="ReactJS">
                        <ReactJS />
                    </CodingCard>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col span={8}>
                    <CodingCard title="Dynamics CRM">
                        <CRM />
                    </CodingCard>
                </Col>
                <Col span={8}>
                    <CodingCard title="SharePoint">
                        <SharePoint />
                    </CodingCard>
                </Col>
                <Col span={8}>
                    <CodingCard title="Docker">
                        <Docker />
                    </CodingCard>
                </Col>
            </Row>
        </div>
    )
};