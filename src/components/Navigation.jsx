import React, { useState, useEffect } from 'react';
import { Tabs, Space, Row, Col } from 'antd';
import About from './About';
import Coding from './Coding';
import Fun from './Fun';
import Bildung from './Bildung';
import Sandbox from './Sandbox';
import './Navigation.css'
const { TabPane } = Tabs;

export default function Navigation(props) {

    return (
        <Row>
            <Col span={24}>
                <Tabs defaultActiveKey={3} type="card">
                    <TabPane tab="About Me" key="1" className="space">
                        <Row>
                            <Col span={20} offset={2}>
                                <About />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Projects" key="2">
                        <Row>
                            <Col span={20} offset={2}>
                                <Coding />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Fun" key="3">
                        <Row>
                            <Col span={20} offset={2}>
                                <Fun />
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    )
}