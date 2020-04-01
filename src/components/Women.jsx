import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Maria Klawe',
  },
];

export default function Women(){
    return(
        <div>
          I'm always happy, if I come accross an inspiring female computer scientist or programmer. Below I collect 
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/3/36/Maria_Klawe_2015.jpg" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="blubb"
                />
            </List.Item>
            )}
        />
        </div>
    )
};