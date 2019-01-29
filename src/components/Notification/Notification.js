import React, {Fragment} from 'react';

const Notification = (props) => {
    return (
        <Fragment>
            <div className='part1'>{props.note1}<p className='part2'>{props.note2}</p></div>
        </Fragment>
    );
};

export default Notification;