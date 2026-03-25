import React from "react";
import { useState } from "react";

export default ()=>{
    const [counter , set_count] = useState(0);

    return<view>
        <h1>Incrementer Button</h1>
        <button onClick={()=>{
            set_count(counter+1);

        }
        }>Press it </button>


    </view>
}