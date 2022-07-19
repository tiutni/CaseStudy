import React, { Fragment } from 'react'

const IntroTab= () => {
    return (
        <Fragment>
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
        </Fragment>
    );
}

export default IntroTab;