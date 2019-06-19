export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_SECOND_NAME = 'SET_SECOND_NAME';

export const setFirstName = firstName =>({
    type: SET_FIRST_NAME,
    payload: firstName
});

export const setSecondName = secondName =>({
    type: SET_SECOND_NAME,
    payload: secondName
});