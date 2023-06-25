import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import {RestaurantCard} from './index'
import client from '../../sanity'



const FeaturedRow = ({id, title, description}: {id: string, title: string, description: string}) => {
  const [restaurants, setRestaurants] = useState<any>([]);
  
  useEffect(() => {
    client.fetch(`
    *[_type == "featured" && _id == $id] {
      ...,
      restaurants[] -> {
        ...,
        dishes[] ->,
        type -> {
          name
        }
      },
    }[0]
    `, {id})
    .then(data => {
      setRestaurants(data?.restaurants)
    })
  }, [id])


  
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
      <Text className='font-bold text-lg'>{title}</Text>
      <ArrowRightIcon color="#0DCCBB"/>
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className='pt-4'
      >
        {/*Restaurant cards...*/}
        {restaurants?.map(({_id, image, name, rating, type, address, short_description, dishes, long, lat} : {_id:string, image:string, name:string, rating:number, type: {name: string}, address:string, short_description:string, dishes:any[], long:number, lat:number}) => (
           <RestaurantCard 
            key={_id}
            id={_id}
            imgUrl={image}
            title={name}
            rating={rating}
            genre={type.name}
            address={address}
            short_description={short_description}
            dishes={dishes}
            long={long}
            lat={lat}
         />
        ))}
      </ScrollView>
    </View>
  )
}

export default FeaturedRow