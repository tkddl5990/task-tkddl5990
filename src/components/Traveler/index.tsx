import React, { FocusEvent, useState, useCallback } from 'react';
import useInput from '../../hooks/useInput';
import useBlur from '../../hooks/useBlur';
import totalValidation from './validation';

type TravelerProp = {
    index?: number;
    delete?: () => void;
    blurHandler: (e: FocusEvent<HTMLInputElement>, index: number) => void;
}

const TravelerItem = (props: TravelerProp) => {
    const [gender, setGender] = useState('');
    const [genderError, setGenderError] = useState('');

    const [lastName, onChangeLastName, setLastName] = useInput('');
    const [lastNameError, onBlurLastName] = useBlur({ initialState: '', validationFc: totalValidation.valitaionName, index: props.index, cb: props.blurHandler });

    const [firstName, onChangeFirstName, setFirstName] = useInput('');
    const [firstNameError, onBlurFirstName] = useBlur({ initialState: '', validationFc: totalValidation.valitaionName, index: props.index, cb: props.blurHandler });

    const [nameKo, onChangeNameKo, setNameKo] = useInput('');
    const [nameKoError, onBlurNameKo] = useBlur({ initialState: '', validationFc: totalValidation.validationNameKo, index: props.index, cb: props.blurHandler });

    const [birth, onChangeBirth, setBirth] = useInput('');
    const [birthError, onBlurBirth] = useBlur({ initialState: '', validationFc: totalValidation.validationBirth, index: props.index, cb: props.blurHandler });

    const onChangeGenderHandler = useCallback((type) => {
        setGender((gender === type) ? '' : type);
    }, [gender])

    return (
        <article className={'common__article'}>
            <h2 className={'traveler__title'}>
                여행자<span>{props.index || 1}</span>
                {
                    (props.delete) && <button className={'traveler__deleteButton'} onClick={props.delete}><span /></button>
                }
            </h2>
            <p className={'traveler__label'}>예약하시는 모든 분의 정보를 여권 상과 동일하게 가입해 주시기 바랍니다.</p>
            <div className={'flex__row horizontal'}>
                <div className={`traveler__inputForm ${lastNameError ? 'onError' : null}`}>
                    <label>영문 이름</label>
                    <div><input placeholder={'Gil Dong'} value={lastName} name={'lastName'} onChange={onChangeLastName} onBlur={onBlurLastName} /></div>
                    <span>{lastNameError}</span>
                </div>
                <div className={'horizontal__void'} />
                <div className={`traveler__inputForm ${firstNameError ? 'onError' : null}`}>
                    <label>영문 이름</label>
                    <div><input placeholder={'Hong'} value={firstName} name={'firstName'} onChange={onChangeFirstName} onBlur={onBlurFirstName} /></div>
                    <span>{firstNameError}</span>
                </div>
            </div>
            <div className={`traveler__inputForm ${nameKoError ? 'onError' : null}`}>
                <label>한글 이름</label>
                <div><input placeholder={'홍길동'} value={nameKo} onChange={onChangeNameKo} onBlur={onBlurNameKo} /></div>
                <span>{nameKoError}</span>
            </div>
            <div className={`traveler__inputForm ${genderError ? 'onError' : null}`}>
                <label>성별</label>
                <div>
                    <button onClick={() => onChangeGenderHandler('man')} className={`${gender === 'man' ? 'onActive' : null}`}>남</button>
                    <div className={'horizontal__line'} />
                    <button onClick={() => onChangeGenderHandler('woman')} className={`${gender === 'woman' ? 'onActive' : null}`}>여</button>
                </div>
                <span>{genderError}</span>
            </div>
            <div className={`traveler__inputForm ${birthError ? 'onError' : null}`}>
                <label>생년월일</label>
                <div><input placeholder={'YYMMDD'} value={birth} onChange={onChangeBirth} onBlur={onBlurBirth} /></div>
                <span>{birthError}</span>
            </div>
            <div className={'common__hr'} />
        </article>
    )
}

export default TravelerItem;