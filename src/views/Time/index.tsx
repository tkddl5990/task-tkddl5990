import React from 'react';
import useBlur from '../../hooks/useBlur';
import useInput from '../../hooks/useInput';

const Time = () => {
    const [hour, onChangeHour, setHour] = useInput('');
    return (
        <article className={'common__article'}>
            <h2 className={'traveler__title'}>숙소 도착 예정 시간</h2>
            <div className={'flex__row horizontal'}>
                <div className={'traveler__inputForm'}>
                    <div>
                        <select onChange={onChangeHour} value={hour}>
                            <option>시</option>
                            <option value={'1'}>1시</option>
                            <option value={'2'}>2시</option>
                            <option value={'3'}>3시</option>
                            <option value={'4'}>4시</option>
                            <option value={'5'}>5시</option>
                            <option value={'6'}>6시</option>
                            <option value={'7'}>7시</option>
                            <option value={'8'}>8시</option>
                            <option value={'9'}>9시</option>
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