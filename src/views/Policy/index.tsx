import React from 'react';

const Policy = () => {
    return (
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
    )
}

export default Policy;