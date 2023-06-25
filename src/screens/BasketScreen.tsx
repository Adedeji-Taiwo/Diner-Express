import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../../redux-features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { selectRestaurant } from '../../redux-features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../../sanity';
import Currency from 'react-currency-formatter';
import { PreparingOrderScreenNavigationProp } from '../types';

const BasketScreen = () => {
    const {goBack, navigate} = useNavigation<PreparingOrderScreenNavigationProp>();
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const dispatch = useDispatch();
    const [groupItemsInBasket, setGroupItemsInBasket] = useState<{ [key: string]: any[] }>({});


  

    useEffect(() => {
        const groupedItems = items.reduce((results: any, item: any) => {
          results[item.id] = results[item.id] || [];
          results[item.id].push(item);
          return results;
        }, {});
      
        setGroupItemsInBasket(groupedItems);
      }, [items]);
      

    return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#0dccbb] bg-white shadow-sm'>
            <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>{restaurant?.title}</Text>
            </View>
            <TouchableOpacity
                onPress={goBack}
                className='rounded-full bg-gray-100 absolute top-3 right-5'
            >
                <XCircleIcon color="#0dccbb" height={50} width={50} />
            </TouchableOpacity>
        </View>

        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
            <Image  
            source={{  uri: `https://links.papareact.com/wru` }} 
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'    
            />
            <Text className='flex-1'>Deliver in 50-57 min</Text>
            <TouchableOpacity>
                <Text className='text-[#0dccbb]'>Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
        {Object.entries(groupItemsInBasket).map(([key, items]) => {
            return (
                <View key={key} className='flex-row items-center space-x-3 bg-white py-2 px-5'>
                <Text className='text-[#0dccbb]'>{items.length} x </Text>
                <Image 
                    source={{ uri: `${urlFor(items[0]?.image).url()}` }}
                    className='h-12 w-12 rounded-full'
                    />
                    <Text className='flex-1'>{items[0]?.name}</Text>
                    
                    <Text className='text-gray-400'>
                        <Currency quantity={Number(items[0]?.price)} currency="NGN" />
                    </Text>

                    <TouchableOpacity>
                        <Text
                            className='text-[#0dccbb] text-xs'
                            onPress={() => dispatch( removeFromBasket({id: key}))}
                        >
                            Remove
                        </Text>
                    </TouchableOpacity>
                
                </View>
            );
        })}
        </ScrollView>

        <View className='p-5 bg-white mt-5 space-y-4'>
            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Subtotal</Text>
                <Text className='text-gray-400'>
                        <Currency quantity={Number(basketTotal)} currency="NGN" />
                </Text>
            </View>

            <View className='flex-row justify-between'>
                <Text className='text-gray-400'>Delivery Fee</Text>
                <Text className='text-gray-400'>
                        <Currency quantity={1200} currency="NGN" />
                </Text>
            </View>

            <View className='flex-row justify-between'>
                <Text>Order Total</Text>
                <Text className='font-extrabold'>
                    <Currency quantity={basketTotal + 1200} currency="NGN" />
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => navigate('PreparingOrder')}
                className='rounded-lg bg-[#0dccbb] p-4'>
                <Text className='text-center text-white text-lg font-bold'>Place Order</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen