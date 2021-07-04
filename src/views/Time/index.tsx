import React from 'react';

const Time = () => {
    return (
        <article className={'common__article'}>
            <h2 className={'traveler__title'}>숙소 도착 예정 시간</h2>
            <div className={'flex__row horizontal'}>
                <div className={'traveler__inputForm'}>
                    <div>
                        <select>
                            <option>시</option>
                        </select>
                    </div>
                    <span>영어로 2자이상 입력해주세요.</span>
                </div>
                <div className={'horizontal__void'} />
                <div className={'traveler__inputForm'}>
                    <div>
                        <select>
                            <option>분</option>
                        </select>
                    </div>
                    <span>영어로 2자이상 입력해주세요.</span>
                </div>
            </div>
            <div className={'common__hr'} />
        </article>
    )
}

export default Time;