const ReducerForSlider = (sliderState = 0, action) => {
    
    if(action.type === 'next'){
        if(sliderState > 2){
            console.log('bor');
            // return sliderState = action.payload - action.items;
            return sliderState = 2;
        }else {
            return sliderState += 3
        }
    }

    if(action.type === 'prev'){
        if(sliderState === 0){
            sliderState = 0;
        }else {
            return sliderState -= 3;
        }
    }
    
    else {
        return sliderState;
    }



    // switch(action.type){
    //     case 'prev':
    //         if(sliderState <= 0){
    //             return sliderState = 0
    //         }else {
    //             return sliderState =- 3
    //         }

    //     case 'next':
    //         if(sliderState >= action.payload - action.items){
    //             return sliderState = action.payload - action.items
    //         }else {
    //             return sliderState =+ 3
    //         }
            

    //     default: return sliderState;
    // }
}

export default ReducerForSlider;