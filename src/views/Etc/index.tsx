import React from 'react';

const Etc = () => {
    return (
        <article className={'common__article'}>
            <h2 className={'traveler__title'}>기타 예약 정보</h2>
            <div className={'traveler__inputForm'}>
                <label>오시는 교통 수단을 적어주세요.</label>
                <div><textarea placeholder={'답변을 입력해주세요.'} /></div>
                <span>한글로 2자이상 입력해주세요.</span>
            </div>
        </article>
    )
}

export default Etc;