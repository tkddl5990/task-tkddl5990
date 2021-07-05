import React, { useCallback, useEffect, useState } from 'react';

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

    useEffect(() => {
        addTraveler();
    }, []);

    const addTraveler = useCallback(() => {
        setTraveler(prev => [...prev, TravelerObj])
    }, [])

    const deleteTraveler = useCallback(() => {
        setTraveler(prev => prev.filter((item, index) => prev.length - 1 !== index));
    }, []);

    return (
        <>
            {/* {
                traveler.map((item, index) => <TravelerItem index={index + 1} key={`travelerItem-${index}`} />)
            } */}
            <button className={'addTravelerButton'} onClick={addTraveler}>
                <span className={'button__horizontal'} />
                <span className={'button__vertical'} />
            </button>
        </>)
}

export default TravelerList;