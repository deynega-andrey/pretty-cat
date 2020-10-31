const initialState = [
    {
        id: 0,
        selected: false,
        disabled: false,
        marvel: "Сказочное заморское яство",
        taste: "Нямушка",
        composition: "С фуа-гра",
        quantity: "10 порций",
        gift: "мышь в подарок",
        weight: "0,5",
        units: "кг",
        hover: false,
        selectedText: "Печень утки разварная с артишоками."
    }, 
    {
        id: 1,
        selected: true,
        disabled: false,
        marvel: "Сказочное заморское яство",
        taste: "Нямушка",
        composition: "С рыбой",
        quantity: "40 порций",
        gift: "2 мыши в подарок",
        weight: "2",
        units: "кг",
        hover: false,
        selectedText: "Головы щучьи с чесноком да свежайшая семгушка."
    },
    {
        id: 2,
        selected: false,
        disabled: true,
        marvel: "Сказочное заморское яство",
        taste: "Нямушка",
        composition: "С курой",
        quantity: "100 порций",
        gift: "5 мышей в подарок",
        weight: 5,
        units: "кг",
        customer: "заказчик доволен",
        hover: false,
        selectedText: "Филе из цыплят с трюфелями в бульоне."
    }   
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECTED_CAT": 
        let cat = [...state].filter(el => el.id === action.payload)[0]; 
        cat = {
            ...cat,
            selected: !cat.selected,
            hover: false
        }
        return [
            ...state.slice(0, action.payload),
            cat,
            ...state.slice(action.payload + 1)
        ]
        case "HOVER_CAT":
        let hoverCat = [...state].filter(el => el.id === action.payload)[0]; 
        hoverCat = {
            ...hoverCat,
            hover: true
        }
        return [
            ...state.slice(0, action.payload),
            hoverCat,
            ...state.slice(action.payload + 1)
        ]
        case "LEAVE_CAT":
        let leaveCat = [...state].filter(el => el.id === action.payload)[0]; 
        leaveCat = {
            ...leaveCat,
            hover: false
        }
        return [
            ...state.slice(0, action.payload),
            leaveCat,
            ...state.slice(action.payload + 1)
        ]
        default:
            return state;
            
    }
}

export default reducer;