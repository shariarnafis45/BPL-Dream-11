import React, { use } from 'react';

const PlayersCardSection = ({playersDataPromise}) => {
    const playersData = use(playersDataPromise)
    console.log(playersData)
    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default PlayersCardSection;