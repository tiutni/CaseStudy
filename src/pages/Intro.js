import React from 'react'
import '../css/Intro.css'
import Footer from '../components/Footer'
import IntroTab from '../components/IntroTab'
import IntroTabContent from '../components/IntroTabContent'
import { Link } from 'react-router-dom'

const Intro = () => {

  const tabItems = document.querySelectorAll('.tab-item');
  const tabContentItems = document.querySelectorAll('.tab-content-item');

  function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
  }
  
  function removeBorder() {
    tabItems.forEach(item => {
      item.classList.remove('tab-border');
    });
  }
  
  function removeShow() {
    tabContentItems.forEach(item => {
      item.classList.remove('show');
    });
  }
    
  tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
  });
  
  return (
    <div>
      <header className="showcase">
        <div className="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          <Link to="/login" className="btn btn-rounded">로그인</Link>
        </div>
        <div className="showcase-content">
          <h1>영화와 시리즈를 <br />무제한으로.</h1>
          <p>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</p>
          <Link to="/browse" className="btn btn-xl">한달 무료 체험하기 <i className="fas fa-chevron-right btn-icon" /></Link>
        </div>
      </header>
      <IntroTab/>
      <IntroTabContent/>
      <Footer/>
    </div>
  )
}

export default Intro;