import { View, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Categories, FeaturedRow, Header, SearchBox } from '../components'
import client from '../../sanity'


const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<any>([]);

  //used when UI essentially loads
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }) 
  }, [])

  //used when components loads
  useEffect(() => {
    client.fetch(`
    *[_type == "featured"] {
      ...,
      restaurants[] -> {
        ...,
        dishes[] ->
      }
    }
    `).then((data) => {
      setFeaturedCategories(data)
    })
  }, [])

 

  return (
    <SafeAreaView className='bg-white'> 
       
        {/*body*/}
        <ScrollView 
          className='bg-gray-100'
          stickyHeaderIndices={[0]}
        >
           {/*Header & Searchbox*/}
          <View className='bg-white pt-8 shadow-sm'>
            <Header />
            <SearchBox />
          </View>


          {/*categories */}
            <Categories />
          {/*Feature rows */}
          {featuredCategories?.map(({_id, name, short_description}: {_id: string, name:string, short_description: string}) => (
            <FeaturedRow 
              key={_id}
              id= {_id}
              title={name}
              description={short_description}
          />
          ))}
      
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen