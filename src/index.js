import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";


ReactDOM.render(
  <div>
    <Header />
    <Navigation />
    <Footer />
  </div>,
  document.getElementById('container'),
);