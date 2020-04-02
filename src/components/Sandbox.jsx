import React, {useState, useEffect} from 'react';
import './Header.css';
import Tachyons from 'tachyons/css/tachyons.min.css';
import CodeWindow from 'react-code-window';
import node from './diagram';
import rd3 from 'react-d3-library';
import { Vega } from 'react-vega';
import MyVega from './MyVega';

var Latex = require('react-latex');

export default function Sandbox(){
    return (
        <div>
            <h3>Welcome to Spielwiese</h3>
                <h3>React and LaTeX</h3>
                <Latex>What is $(3\times 4) \div (5-3)$ ?</Latex>
                <br/><br/>
                <h3>React and Vega</h3>
                <div>
                    <MyVega />
                </div>
        </div>
    )
}