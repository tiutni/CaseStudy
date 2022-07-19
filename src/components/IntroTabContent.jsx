import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const IntroTabContent = () => {
    return (
        <Fragment>
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
                        <Link to="#" className="btn btn-lg">한달 무료 체험하기</Link>
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
                    <Link to="#" className="btn btn-lg">한달 무료체험 하기</Link>
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
                    <Link to="#" className="btn btn-lg">한달 무료체험 하기</Link>
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
                        <td>16,000원</td>
                        </tr>
                        <tr>
                        <td>HD 시청 가능</td>
                        <td><i className="fas fa-times" /></td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        </tr>
                        <tr>
                        <td>UHD 시청 가능</td>
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
                        <td>노트북, TV, 핸드폰, 태블릿 지원</td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        </tr>
                        <tr>
                        <td>무제한 영화와 TV프로그램</td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        </tr>
                        <tr>
                        <td>언제든 취소가능</td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        </tr>
                        <tr>
                        <td>한달 무료체험</td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        <td><i className="fas fa-check" /></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </section>
        </Fragment>
    );
}

export default IntroTabContent;