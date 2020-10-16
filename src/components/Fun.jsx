import React, { useState } from 'react';
import { Row, Col } from 'antd';
import tomantje from '../tom-antje.jpg';

export default function Fun() {

  return (
    <div>
      <Row>
        <Col span={8}>
          <img src={tomantje} />
        </Col>
      </Row>
      <Row>My husband and me hiking</Row>
    </div>
  )
}