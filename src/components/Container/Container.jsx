import React from 'react';
import './container.scss'

const Container = ({children, className, ...props}) => {
    return (
        <div {...props} className={['container', className].join(' ')}>
            {children}
        </div>
    );
};

export default Container;