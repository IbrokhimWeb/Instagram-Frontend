import React, { useState, useCallback, useRef } from 'react';

export default function Resize(responsive) {
    let container = useRef();
    let target = useRef();
    let observ = useRef();

    const [boxWidth, setBoxWidth] = useState(0);
    const [items, setItems] = useState(0);

    let itemx = 0;
    function resizeSslider() {
        responsive.forEach(elem => {
            if(window.innerWidth > elem.breakpointer.width){
                itemx = elem.breakpointer.item;
                setItems(itm => itm = elem.breakpointer.item);
            }
        });

        let containerWidth = container.current.offsetWidth;
        let boxesWidth = Math.floor(containerWidth / itemx);
        setBoxWidth(boxes => boxes = boxesWidth);
    }

    target = useCallback((element) => {
        if(element){
            observ.current = new ResizeObserver(resizeSslider).observe(element);
        }
    }, []);

  return [container, target, boxWidth, items];
};
