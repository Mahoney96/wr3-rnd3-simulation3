// initial State
const initialState = {
    fullStentence: 'Start typing already'
}

// action types 

const UPDATE_FULLSENTENCE = 'UPDATE_FULLSETENCE';

// action creators 

export function updateFullSentence(wordStr)
 {
     return {
         type: UPDATE_FULLSENTENCE,

     }
 }

reducer

expport default  function reducer(state= initialState, action)
switch(action.type) {
    case UPDATE_F
}