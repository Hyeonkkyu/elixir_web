import React from 'react'


function reducer(currentState, action) {
    if(currentState === undefined) {
        return {
            checkEmail: null
        }
    }
    const newState = {...currentState};
    return newState;
}

export default Store