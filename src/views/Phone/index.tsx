import React from 'react';

const Phone = () => {
    return (
        <article className={'common__article'}>
            <h2 className={'traveler__title'}>상세 핸드폰 정보</h2>
            <div className={'traveler__inputForm'}>
                <label>사용자 이름</label>
                <div><input placeholder={'홍길동'} /></div>
                <span>한글로 2자이상 입력해주세요.</span>
            </div>
            <div className={'flex__row timeHorizontal'}>
                <div className={'traveler__inputForm'}>
                    <div>
                        <select>
                            <option>+82(대한민국)</option>
                        </select>
                    </div>
                    <span>영어로 2자이상 입력해주세요.</span>
                </div>
                <div className={'horizontal__void'} />
                <div className={'traveler__inputForm'}>
                    <div>
                        <input placeholder={'홍길동'} />
                    </div>
                    <span>영어로 2자이상 입력해주세요.</span>
                </div>
            </div>
            <div className={'common__hr'} />
        </article>
    )
}

export default Phone;