import React, {useState, useEffect} from "react";

export const LengthFunctions = (username, number, numberSlice) => {
    const [authorTitle , setAuthorTitle] = useState(username);
    const [nameLength, setNameLength] = useState(false);
    
    useEffect(() => {
        if(username !== undefined){
            if(username.length > number){
                setAuthorTitle(titles => titles.slice(0, numberSlice)); 
                
            }
        
            if(username.length > number){
                setNameLength(active => active = !active);
            }
        }
    }, []);

    return [authorTitle, nameLength]
};