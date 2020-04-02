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
import Post from './Post';
import Docker from './Docker';
import { getConfigFileParsingDiagnostics } from 'typescript';
import { useEffect } from 'react';


const data = [
    {
      title: 'Django + Docker',
      link: 'https://www.jshero.net/en/home.html',
      text: 'Dockerize your Django for production',
      avatar: 'https://live.staticflickr.com/7336/14098888813_1047e39f08.jpg'
    }
  ];

export default function Coding(){

    return(
        <div>
            <h3>Coding Blog</h3>
            <Row>
            <Col> 
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a href={item.link}>{item.title}</a>}
                    description={item.text}
                    />
                </List.Item>
                )}
            />
            </Col>
          </Row>
        </div>
    )
};