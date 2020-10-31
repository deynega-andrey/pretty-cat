import React from "react";
import "./text.scss";

const Text = React.memo(function MyComponent({cat, selectedCat}) {
    const {selected, hover, disabled, selectedText, id} = cat;
    return (
        <div className="app__texts">
            {!selected && !disabled && <div className="app__text">Что сидишь? Порадуй котэ, <span 
            className={hover && !selected ? "app__buy app__buy_hover" : "app__buy" } onClick={()=>selectedCat(id)} >купи</span>
            <span className={hover && !selected ? "app__dot app__dot_hover" : "app__dot" }>.</span></div>}
            {selected && <div className="app__text">{selectedText}</div>}
            {disabled && !selected && <div className="app__text app__text_disabled">Печалька, с курой закончился.</div>}
        </div>
    );
});

export default Text;
