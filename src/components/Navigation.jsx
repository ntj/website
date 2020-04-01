import React from 'react';
import { Tabs, Space, Row, Col } from 'antd';
import About from './About';
import Coding from './Coding';
import Women from './Women';
import Bildung from './Bildung';
import Sandbox from './Sandbox';
import './Navigation.css'
const { TabPane } = Tabs;

export default function Navigation(){
    function callback(key) {
        console.log(key);
    }

    return (
        <Space>
            <Tabs defaultActiveKey="2" onChange={callback} type="card">
                <TabPane tab="Coding" key="2">
                    <Row>
                        <Col span={15} offset={2}>
                            <Coding />
                        </Col>
                    </Row>
                </TabPane>
                {/* <TabPane tab="Role Models" key="3">
                    <Row>
                        <Col span={15} offset={2}>
                            <Women />
                        </Col>
                    </Row>
                </TabPane> */}
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
                        <Col span={15} offset={2}>
                            <About />
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </Space>
    )
}