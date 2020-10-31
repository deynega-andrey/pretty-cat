const selectedCat = id => ({type: "SELECTED_CAT", payload: id})
const hoverCat = id => ({type: "HOVER_CAT", payload: id})
const leaveCat = id => ({type: "LEAVE_CAT", payload: id})

export { selectedCat, hoverCat, leaveCat }