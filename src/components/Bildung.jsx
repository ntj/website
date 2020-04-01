import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Code IT',
    link: 'https://code-it-studio.de/',
    text: 'Programmieren lernen für Kinder'
  },
  {
    title: 'HackerRank',
    link: 'https://www.hackerrank.com/',
    text: 'Programmieren lernen für Erwachsene'
  },
];

export default function Women(){
    return(
        <div>
          Here I'm collecting interesting links regarding education and computer science
        <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                // avatar={<Avatar src="" />}
                title={<a href={item.link}>{item.title}</a>}
                description={item.text}
                />
            </List.Item>
            )}
        />
        </div>
    )
};