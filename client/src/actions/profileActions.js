export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_SECOND_NAME = 'SET_SECOND_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const MAP_FRIENDS_TO_STORE = 'MAP_FRIENDS_TO_STORE';
export const MAP_GROUPS_TO_STORE = 'MAP_GROUPS_TO_STORE';

export const setFirstName = firstName =>({
    type: SET_FIRST_NAME,
    payload: firstName
});

export const setSecondName = secondName =>({
    type: SET_SECOND_NAME,
    payload: secondName
});

export const setEmail = email =>({
    type: SET_EMAIL,
    payload: email
});
export const setPassword = password =>({
    type: SET_PASSWORD,
    payload: password
});

export const mapFriendsToStore = friends =>({
    type: MAP_FRIENDS_TO_STORE,
    payload: friends
});
export const mapGroupsToStore = groups =>({
    type: MAP_GROUPS_TO_STORE,
    payload: groups
});