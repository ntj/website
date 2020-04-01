import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Resume from './Resume';

export default function About(){

    return (
        <div>
            <Row>
                <Col span={6}>
                    <img src='./wald.jpeg' width="200px"/>
                </Col>
                <Col span={12}>
                    <Row>
                        I'm Antje Kazimiers, a software engineer from Dresden, Germany.
                        I'm building web applications with various frameworks, including python flask, django, drupal,
                        microsoft dynamics crm and sharepoint. Now I work on getting proficient with ReactJS.
                    </Row>
                    <br />
                    <Row>
                        I'm always exploring ways to teach IT knowledge to everyone interested, children and adults. Using the computer, devices and digital media, understanding
                        terms you come accross when you read about the internet, algorithms, and the impact social networks have on our lives.
                    </Row>
                </Col>
                <Col span={6}>
                    <Resume />
                </Col>
            </Row>
        </div>
    )
}