import { createSlice, createSelector } from '@reduxjs/toolkit'



export interface RestaurantState {
    restaurant: {
        id: string | null,
        imgUrl: string | null,
        title: string | null,
        rating: number | null,
        genre: string | null,
        address: string  | null,
        short_description: string | null,
        dishes: any | null[],
        long: number | null,
        lat: number | null
    },
  }
  
  const initialState: RestaurantState = {
    restaurant:  {
        id: null,
        imgUrl: null,
        title: null,
        rating: null,
        genre: null,
        address: null,
        short_description: null,
        dishes: [],
        long: null,
        lat: null
    },
  };
  

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => { 
      state.restaurant = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions


//helper functions

export const selectRestaurant = (state: any) => state.restaurant.restaurant;



export default restaurantSlice.reducer