let defaultState = {
  selectedItems: { items: [],quantity:0 },
};

const cartReducer = (state=defaultState,action) => {
    let newState = { ...state };
    switch(action.type)
    {
        case "ADD_TO_CART":{
            
            newState.selectedItems = { 
                items: [...newState.selectedItems.items,action.payload],
                quantity: action.payload.quantity
            }
            console.log(newState, "👉");
            return newState;
        }
        case "REMOVE_FROM_CART":{
             newState.selectedItems = {
               items: [
                 ...newState.selectedItems.items.filter(
                   (item) => item.id !== action.payload.id
                 ),
               ],
             };
            //  console.log(newState, "👌");
             return newState;
             
        }
        case "BUY_NOW":{
         newState.selectedItems = {
           items: [...newState.selectedItems.items, action.payload],
           quantity: action.payload.quantity,
         };
          console.log(newState, "😎");
          return newState;
        }
        case "REMOVE_ITEMS":{
          newState.selectedItems = {
            items: [],
          }
        }

        default:
            return state;
    }
}
export default cartReducer;