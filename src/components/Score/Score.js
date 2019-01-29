import React, {Fragment} from 'react';

const Score = (props) => {
    return (
        <Fragment>
            <div className='score'>{'Your Scores : ' + props.score}<p className='total_score'>{'Total Scores : ' + props.totalScore}</p></div>
        </Fragment>
    );
};

export default Score;