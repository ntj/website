import React, { useState } from 'react';
import { Row, Col, Space } from 'antd';
import { Avatar } from 'antd';
import wald from '../wald.jpeg';
import './About.css'

export default function About() {

    return (
        <div>
            <h3>About me</h3>
            <Row>
                <Col span={8}>
                    I'm a scientific associate working in the field of didactics of computer science from Dresden, Germany.
                    During my career as a software engineer, I built web applications with various frameworks, including Python
                    Flask, Django, Drupal and Microsoft Dynamics CRM.<br /><br />
                    From this experience, I strongly believe, tech is an industry full of potential and opportunities
                    for a lot of people and computer science should be taught in a way knowledge becomes easy to learn.
                </Col>
                <Col span={6} offset={3}>
                    <div class="avatar-column">
                        <Avatar size={128} src={wald} />
                    </div>
                </Col>
            </Row>
        </div>
    )
}