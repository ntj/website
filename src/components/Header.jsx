import React from 'react';
import './Header.css'
import { Avatar } from 'antd';
import Tachyons from 'tachyons/css/tachyons.min.css'

export default function Header(){

    return (    
        <div className="website-header">
            <h2><Avatar size={32} src='./wald.jpeg' />
                <span className='text'>Antje Kazimiers</span>
            </h2>
        </div>
    )
}