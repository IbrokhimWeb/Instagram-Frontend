let objectActives = {
    chengeActive: false,
    contentActive: false,
    pagesX: 0,
}

const ReducerActives = (state = objectActives, action) => {
    switch(action.type){
        case 'chengeActive':
            return {
                ...state, chengeActive: !state.chengeActive
            }

        case 'contentActive':
            return {
                ...state,
                    contentActive: true,
                    pagesX: action.payloadX,
            }

        case 'contentActiveRemove':
            return {
                ...state, contentActive: false
            }
        default: return state
    }
}

export default ReducerActives;