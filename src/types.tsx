import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";



// type checking for stack navigator
export type HomeStackNavigatorParamList = {
    Home: undefined;
    Restaurant: {
        id: string,
        imgUrl: string,
        title: string,
        rating: number,
        genre: string,
        address: string,
        short_description: string,
        dishes: any[],
        long: number,
        lat: number
    },
    Basket: undefined;
    PreparingOrder: undefined;
    Delivery: undefined;
}



export type RestaurantCardProps = {
    id: string,
    imgUrl: string,
    title: string,
    rating: number,
    genre: string,
    address: string,
    short_description: string,
    dishes: any[],
    long: number,
    lat: number
}




//type check for home screen
export type HomeScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'Home'
>


//type check for restaurant screen
export type RestaurantScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'Restaurant'
>


//type check for basketScreen screen
export type BasketScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'Basket'
>


//type check for preapring order screen
export type PreparingOrderScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'PreparingOrder'
>


//type check for restaurant screen
export type DeliveryScreenNavigationProp = NativeStackNavigationProp<
    HomeStackNavigatorParamList,
    'Delivery'
>



//type checking for restaurant route param
export type RestaurantScreenRouteProp = RouteProp<
    HomeStackNavigatorParamList,
    'Restaurant'
>