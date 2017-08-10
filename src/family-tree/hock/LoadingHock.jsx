/* @flow */

import React from 'react';

export default function LoadingHock() {
    return (Component) => (props) => {
        return props.requestState
            .fetchingMap(() => <div>Loading...</div>)
            .refetchingMap(() => <div>Loading...</div>)
            .successMap(() => <Component {...props}/>)
            .value(null);
    }
}
