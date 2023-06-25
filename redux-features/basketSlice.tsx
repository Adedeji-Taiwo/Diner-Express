import { createSlice, createSelector } from '@reduxjs/toolkit'



export interface BasketState {
    items: {
      id: string;
      name: string;
      description: string;
      image: string;
      price: string;
    }[];
  }
  
  const initialState: BasketState = {
    items: [],
  };
  

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => { 
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);

        let newBasket = [...state.items];

        if (index >= 0) {
            newBasket.splice(index, 1);
        } else {
            console.warn(
                `Can't remove product (id: ${action.payload.id}) as it's not in basket`
            )
        }
        state.items = newBasket;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

//helper functions


export const selectBasketItems = (state: any) => state.basket.items

//use createSelector so the selectBasketItemsWithId selector will only recalculate its result when the selectBasketItems selector or the id parameter change, preventing unnecessary re-renders caused by different results being returned.
export const selectBasketItemsWithId = createSelector(
  selectBasketItems,
  (state: any, id: string) => id,
  (basketItems, id) => basketItems.filter((item: any) => item.id === id)
);



//summing up prices from each object
export const selectBasketTotal = (state: any) =>
  state.basket.items.reduce((acc: number, cur: any) => {
    acc += Number(cur.price);
    return acc;
  }, 0);



export default basketSlice.reducer