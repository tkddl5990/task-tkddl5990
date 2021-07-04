import React, { useCallback, useState } from 'react';

import { Traveler } from '../../types/traveler.interface';
import TravelerItem from '../../components/Traveler';

const TravelerObj = {
    lastName: '',
    firstName: '',
    nameKo: '',
    gender: '',
    birth: ''
}

const TravelerList = () => {
    const [traveler, setTraveler] = useState<Traveler[]>([]);

    const addTraveler = useCallback(() => {
        setTraveler(prev => [...prev, TravelerObj])
    }, [])

    const deleteTraveler = useCallback(() => {
        setTraveler(prev => prev.filter((item, index) => prev.length - 1 !== index));
    }, []);

    return (
        <>
            <TravelerItem />
            {
                traveler.map((item, index) => <TravelerItem index={index + 2} key={`travelerItem-${index}`} delete={(traveler.length - 1 === index) ? deleteTraveler : undefined} />)
            }
            <button className={'addTravelerButton'} onClick={addTraveler}>
                <span className={'button__horizontal'} />
                <span className={'button__vertical'} />
            </button>
        </>)
}

export default TravelerList;