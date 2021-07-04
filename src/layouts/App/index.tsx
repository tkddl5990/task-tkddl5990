import React, { Suspense } from 'react';

const TravelerList = React.lazy(() => import('../TravelerList'));
const Time = React.lazy(() => import('../../views/Time'))
const Phone = React.lazy(() => import('../../views/Phone'));
const Etc = React.lazy(() => import('../../views/Etc'));
const Policy = React.lazy(() => import('../../views/Policy'));
const Pay = React.lazy(() => import('../../views/Pay'));

const App = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <section className={'layout__section'}>
                <TravelerList />
                <Time />
                <Phone />
                <Etc />
                <div className={'common__boldHr'} />
                <Policy />
                <Pay />
            </section>
        </Suspense>
    )
}

export default App;