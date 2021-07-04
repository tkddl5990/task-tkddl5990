import React from 'react';

const Traveler = () => {
    return (
        <article className={'common__article'}>
            <h2 className={'traveler__title'}>여행자<span>1</span></h2>
            <p className={'traveler__label'}>예약하시는 모든 분의 정보를 여권 상과 동일하게 가입해 주시기 바랍니다.</p>
            <div className={'flex__row horizontal'}>
                <div className={'traveler__inputForm'}>
                    <label>영문 이름</label>
                    <div><input placeholder={'Gil Dong'} /></div>
                    <span>영어로 2자이상 입력해주세요.</span>
                </div>
                <div className={'horizontal__void'} />
                <div className={'traveler__inputForm'}>
                    <label>영문 이름</label>
                    <div><input placeholder={'Hong'} /></div>
                    <span>영어로 2자이상 입력해주세요.</span>
                </div>
            </div>
            <div className={'traveler__inputForm'}>
                <label>한글 이름</label>
                <div><input placeholder={'홍길동'} /></div>
                <span>한글로 2자이상 입력해주세요.</span>
            </div>
            <div className={'traveler__inputForm'}>
                <label>성별</label>
                <div>
                    <button>남</button>
                    <div className={'horizontal__line'} />
                    <button>여</button>
                </div>
                <span>성별을 선택해주세요.</span>
            </div>
            <div className={'traveler__inputForm'}>
                <label>생년월일</label>
                <div><input placeholder={'YYMMDD'} /></div>
                <span>숫자로 6자를 입력해주세요.</span>
            </div>
            <div className={'common__hr'} />
        </article>
    )
}

export default Traveler;