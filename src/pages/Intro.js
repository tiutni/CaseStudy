import React from 'react'
import '../css/Intro.css'

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

export default function Intro() {
  return (
    <div>
      <header className="showcase">
        <div className="showcase-top">
          <img src="https://i.ibb.co/r5krrdz/logo.png" alt="" />
          {/* <a href="../Netflix_browse/browse.html" className="btn btn-rounded">로그인</a> */}
          <a href="#" className="btn btn-rounded">로그인</a>
        </div>
        <div className="showcase-content">
          <h1>영화와 시리즈를 <br />무제한으로.</h1>
          <p>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</p>
          <a href="#" className="btn btn-xl">한달 무료 체험하기 <i className="fas fa-chevron-right btn-icon" /></a>
        </div>
      </header>
      <section className="tabs">
        <div className="container">
          <div id="tab-1" className="tab-item tab-border">
            <i className="fas fa-door-open fa-3x" />
            <p className="hide-sm">언제든 취소할 수 있습니다</p>
          </div>
          <div id="tab-2" className="tab-item">
            <i className="fas fa-tablet-alt fa-3x" />
            <p className="hide-sm">어디서든 볼 수 있습니다</p>
          </div>
          <div id="tab-3" className="tab-item">
            <i className="fas fa-tags fa-3x" />
            <p className="hide-sm">금액을 선택하세요</p>
          </div>
        </div>
      </section>
      <section className="tab-content">
        <div className="container">
          {/* Tab Content 1 */}
          <div id="tab-1-content" className="tab-content-item show">
            <div className="tab-1-content-inner">
              <div>
                <p className="text-lg">
                  더 이상 넷플릭스가 필요하지 않다면 - 걱정마세요.
                  언제든지 온라인으로 해지할 수 있습니다.
                </p>
                <a href="#" className="btn btn-lg">한달 무료 체험하기</a>
              </div>
              <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="" />
            </div>
          </div>
          {/* Tab Content 2 */}
          <div id="tab-2-content" className="tab-content-item">
            <div className="tab-2-content-top">
              <p className="text-lg">
                언제 어디서든 TV 프로그램이나 영화를 시청하실 수 있습니다. — 당신에게 맞춰서요.
              </p>
              <a href="#" className="btn btn-lg">Watch Free For 30 Days</a>
            </div>
            <div className="tab-2-content-bottom">
              <div>
                <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt="" />
                <p className="text-md">
                  당신의 TV로 시청하세요.
                </p>
                <p className="text-dark">
                  스마트TV, 플레이스테이션, 엑스박스, 크롬캐스트, 애플 TV, 블루레이
                  그외 다른 플레이 기기들을 활용할 수 있어요.
                </p>
              </div>
              <div>
                <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt="" />
                <p className="text-md">
                  즉시 보거나 나중에 이어서 시청할 수 있습니다.
                </p>
                <p className="text-dark">
                  어디를 가든 핸드폰이나 태블릿으로 시청할 수 있습니다.
                </p>
              </div>
              <div>
                <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt="" />
                <p className="text-md">
                  어떤 컴퓨터든 가능합니다.
                </p>
                <p className="text-dark">
                  지금 바로 넷플릭스에서 시청하세요.
                </p>
              </div>
            </div>
          </div>
          {/* Tab Content 3 */}
          <div id="tab-3-content" className="tab-content-item">
            <div className="text-center">
              <p className="text-lg">
                지금 바로 신청하고 언제 어디서든 시청하세요!
              </p>
              <a href="#" className="btn btn-lg">한달 무료체험 하기</a>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th />
                  <th>베이직</th>
                  <th>기본</th>
                  <th>프리미엄</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>한달 이용 금액</td>
                  <td>9,000원</td>
                  <td>13,000원</td>
                  <td>$16,000원</td>
                </tr>
                <tr>
                  <td>HD 시청 가능</td>
                  <td><i className="fas fa-times" /></td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                </tr>
                <tr>
                  <td>Ultra HD 시청 가능</td>
                  <td><i className="fas fa-times" /></td>
                  <td><i className="fas fa-times" /></td>
                  <td><i className="fas fa-check" /></td>
                </tr>
                <tr>
                  <td>동시간대 시청 가능 수</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>Watch on your laptop, TV, phone and tablet</td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                </tr>
                <tr>
                  <td>Unlimited movies and TV shows</td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                </tr>
                <tr>
                  <td>Cancel anytime</td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                </tr>
                <tr>
                  <td>First month free</td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                  <td><i className="fas fa-check" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>Questions? Call 1-866-579-7172</p>
        <div className="footer-cols">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Ways To Watch</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Netflix Originals</a></li>
          </ul>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Redeem Gift Cards</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Speed Test</a></li>
          </ul>
          <ul>
            <li><a href="#">Media Center</a></li>
            <li><a href="#">Buy Gift Cards</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Legal Notices</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
