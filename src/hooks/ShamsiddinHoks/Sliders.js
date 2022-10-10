import React, {useState} from 'react'

export default function Sliders(items, postsInner) {
    
    const [count, setCount] = useState(0);
    
    const BtnsSlider = ({type}) => {
        if(type === 'next'){
            if(count >= postsInner.length - items){
                setCount(counter => counter = postsInner.length - items);
            }else {
                setCount(counter => counter += 1);
            }
        }

        if(type === 'prev'){
            if(count === 0){
                setCount(counter => counter = 0);
            }else {
                setCount(counter => counter -= 1);
            }
        }
    }
    return [BtnsSlider, count];
}
