import React, { useState } from 'react';
import { Row, Col, Space } from 'antd';
import Resume from './Resume';
import { Avatar } from 'antd';

export default function About(){

    return (
        <div>
            <h3>About me</h3>
            <Row>
                <Col span={8}>
                    I'm a software engineer from Dresden, Germany.
                    I'm building web applications with various frameworks, including python flask, django, drupal,
                    microsoft dynamics crm and sharepoint. Right now I'm working on getting proficient with ReactJS.<br/><br/>
                </Col>
                <Col span={6} offset={3}>
                    <Avatar size={128   } src='./wald.jpeg' />
                </Col>
            </Row>
            <br/>
                <Row>
                <Col span={8}>
                    I'm always exploring ways to teach IT knowledge to everyone interested, children and adults. Using the computer, devices and digital media, understanding
                    terms you come accross when you read about the internet, algorithms, and the impact social networks have on our lifes.<br/><br/>
                    As part of a coding club at Janelia Research Campus, I created<br/>
                    <a href="https://github.com/WomensCodingCircle/getting-started">Getting started</a>a doc how to start using any of the given tools, frameworks and languages.
                    <br/>
                </Col>
                <Col span={6}>
                    <Resume />
                </Col>
            </Row>>
        </div>
    )
}