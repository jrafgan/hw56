import React, {Fragment} from 'react';

const SmallSquare = (props) => {
    return (
        <Fragment>
            <div className={props.divClass} id={props.id} onClick={(event)=>{props.changeColor(event)}}><p className={props.hide}>{props.prize}</p></div>
        </Fragment>
    );
};

export default SmallSquare;