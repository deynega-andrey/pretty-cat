import React from "react";
import "./cards.scss";
import Cat from "../cat/cat";
import Text from "../text/text";

const Cards = (props) => {
    return (
        <div className="app__cards">
            {props.state.map((cat, index) => {
                return (
                    <div className="app__card" key = {index}>
                        <Cat cat={cat} {...props}/>
                        <Text cat={cat} {...props}
                        />
                    </div>
                );}  
           )}
        </div>
    );
};

export default Cards;