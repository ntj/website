import React, { useState, useEffect } from 'react';
import { Tabs, Space, Row, Col } from 'antd';
import About from './About';
import Coding from './Coding';
import Bildung from './Bildung';
import Sandbox from './Sandbox';
import './Navigation.css'
const { TabPane } = Tabs;

export default function Navigation(props){
    function callback(key) {
        console.log(key);
    }

    useEffect(() => {
        // Update the document title using the browser API
        console.log(props.default);
    });

    return (
        <Row>
            <Col span={24}>
                <Tabs defaultActiveKey={3} onChange={callback} type="card">
                    <TabPane tab="Coding" key="2">
                        <Row>
                            <Col span={20} offset={2}>
                                <Coding />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Bildung" key="4">
                        <Row>
                            <Col span={15} offset={2}>
                                <Bildung />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="Spielwiese" key="5">
                        <Row>
                            <Col span={15} offset={2}>
                                <Sandbox />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tab="About Me" key="1" className="space">
                        <Row>
                            <Col span={20} offset={2}>
                                <About />
                            </Col>
                        </Row>
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    )
}