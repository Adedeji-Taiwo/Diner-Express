import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../../redux-features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import Currency from 'react-currency-formatter';
import { BasketScreenNavigationProp } from '../types'



const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const {navigate} = useNavigation<BasketScreenNavigationProp>();
    const basketTotal = useSelector(selectBasketTotal);

    if (items.length === 0) return null;

  return (
    <View className='absolute bottom-10 w-full z-50'>
      <TouchableOpacity onPress={() => navigate('Basket')} className='bg-[#0dccbb] mx-5 p-4 rounded-lg flex-row items-center space-x-1'>
        <Text className='text-white font-extrabold text-lg bg-[#01a296] py-1 px-2'>{items.length}</Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>View Basket</Text>
        <Text className='text-lg text-white font-extrabold'>
                <Currency quantity={Number(basketTotal)} currency="NGN" />
            </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon