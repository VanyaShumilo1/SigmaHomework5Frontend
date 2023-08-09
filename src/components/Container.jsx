import React from 'react';
import '../styles/container.scss'

const Container = ({children, className, ...props}) => {
    return (
        <div {...props} className={['container', className].join(' ')}>
            {children}
        </div>
    );
};

export default Container;