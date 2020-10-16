import React, { useState } from 'react';
import { Row, Col } from 'antd';

export default function Resume() {
  const [mode, setMode] = useState('left');

  const onChange = e => {
    setMode(e.target.value);
  };

  return (
    <div>
      <Row>
        <Col span={8}>
          <img src="./tom-antje.jpg" />
        </Col>
      </Row>
      <Row>My husband and me hiking</Row>
    </div>
  )
}