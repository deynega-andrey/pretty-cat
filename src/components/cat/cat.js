import React from 'react';
import './cat.scss';

const Cat = React.memo(function MyComponent({ cat, selectedCat, hoverCat, leaveCat }) {
    
    const { id, selected, disabled, marvel, taste, composition, quantity, gift, weight, units, hover } = cat;
    const styleBorder = { borderColor: 
        disabled ? 'rgb(179, 179, 179)' : 
        selected && !hover ? 'rgb(217, 22, 103)' :
        selected && hover ? '#e52e7a' :
        !selected && hover ? '#2ea8e6' :
        'rgb(22, 152, 217)'
    }
    const style = { background: 
        disabled ? 'rgb(179, 179, 179)' : 
        selected && !hover ? 'rgb(217, 22, 103)' :
        selected && hover ? '#e52e7a' :
        !selected && hover ? '#2ea8e6' :
        'rgb(22, 152, 217)'
    }
    const styleDisabled = { opacity: disabled ? 0.5 : 1, cursor: disabled ? 'default' : 'pointer', 
    color: disabled ? 'rgba(179, 179, 179, 1)' : 'rgb(0, 0, 0)' }
    return (
        <div 
            className = "app__frame"
            style={styleBorder}
            onClick={!disabled ? () => selectedCat(id) : null}
            onMouseEnter={!disabled  && !hover ? () => hoverCat(id) : null}
            onMouseLeave={!disabled  && hover ? () => leaveCat(id) : null}
        >
            <div className="app__marvel" style={styleDisabled}>
                {selected && hover ? <div className="app__disapproval">Котэ не одобряет?</div> :
                marvel}
            </div>
            <div className="app__tasty" style={styleDisabled}>{taste}</div>
            <div className="app__composition" style={styleDisabled}>{composition}</div>
            <div className="app__quantity" style={styleDisabled}>{quantity}</div>
            {disabled && <div className="app__quantity" style={styleDisabled}>заказчик доволен</div>}
            <div className="app__gift" style={styleDisabled}>{gift}</div>
            <div className="app__cat" style={styleDisabled}></div>
            <div className="app__ellipse" style={style}>
                <div className="app__weight">{weight}</div>
                <div className="app__units">{units}</div>
            </div>
            <div className="app__stick" style={style}></div>
        </div>
    )
})

export default Cat;