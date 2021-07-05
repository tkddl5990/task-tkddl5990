import React, { useEffect, useCallback, useState, FocusEvent } from 'react';
import useInput from '../../hooks/useInput';
import { Traveler } from '../../types/traveler.interface';
import TravelerItem from '../../components/Traveler';

const TravelerObj = {
    lastName: '',
    firstName: '',
    nameKo: '',
    gender: '',
    birth: ''
}

const Container = () => {
    const [traveler, setTraveler] = useState<Traveler[]>([]);
    const [lastName, onChangeLastName, setLastName] = useInput('');

    useEffect(() => {
        addTraveler();
    }, []);

    const addTraveler = useCallback(() => {
        setTraveler(prev => [...prev, TravelerObj])
    }, [])

    const deleteTraveler = useCallback(() => {
        setTraveler(prev => prev.filter((item, index) => prev.length - 1 !== index));
    }, []);

    const checkStateHandler = useCallback((e: FocusEvent<HTMLInputElement>, index: number) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(index);
        setTraveler(state => {
            let item = state[index];
            item = {
                ...item,
                [name]: value
            };
            state[index] = item;
            return state;
        })
    }, []);

    const submit = useCallback(() => {
        console.log(traveler);
    }, [traveler]);

    return (
        <section className={'layout__section'}>
            {
                traveler.map((item, index) => (<TravelerItem key={`travelerList-${index}`} index={index} delete={(traveler.length - 1 === index) ? deleteTraveler : undefined} blurHandler={checkStateHandler} />))
            }

            <button className={'addTravelerButton'} onClick={addTraveler}>
                <span className={'button__horizontal'} />
                <span className={'button__vertical'} />
            </button>

            <article className={'common__article'}>
                <h2 className={'traveler__title'}>숙소 도착 예정 시간</h2>
                <div className={'flex__row horizontal'}>
                    <div className={'traveler__inputForm'}>
                        <div>
                            <select>
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

            <article className={'common__article'}>
                <h2 className={'traveler__title'}>기타 예약 정보</h2>
                <div className={'traveler__inputForm'}>
                    <label>오시는 교통 수단을 적어주세요.</label>
                    <div><textarea placeholder={'답변을 입력해주세요.'} /></div>
                    <span>한글로 2자이상 입력해주세요.</span>
                </div>
            </article>

            <div className={'common__boldHr'} />

            <article className={'common__article'}>
                <h2 className={'traveler__title'}>약관 동의</h2>
                <div className={'traveler__checkForm'}>
                    <div className={'policy__checkBox total'}>
                        <p />
                        <span>전체 약관 동의</span>
                    </div>
                </div>
                <div className={'traveler__checkForm detail'}>
                    <div className={'policy__checkBox'}>
                        <p />
                        <span>여행자 약관 동의 (필수)</span>
                    </div>
                    <div className={'policy__checkBox'}>
                        <p />
                        <span>특가 항공권 및 할인 혜택 안내 동의 (선택)</span>
                    </div>
                </div>
            </article>

            <article className={'common__article'}>
                <button className={'common__payButton'} onClick={submit}>결제하기</button>
            </article>
        </section >
    )
}

export default Container;