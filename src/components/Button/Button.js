import React, {Fragment} from 'react';

const Button = (props) => {
    const buttonName = ['reset'];
    return (
        <Fragment>
            <button className="reset_button" onClick={props.onClick}>{buttonName}</button>
        </Fragment>
    );
};

export default Button;