import { ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import {CategoryCard} from './index'
import client from '../../sanity';
import { urlFor } from '../../sanity';


const Categories = () => {
  const [categories, setCategories]  = useState<any>([]);

  useEffect(() => {
    client.fetch(`
    *[_type == "category"]
    `).then(data => {
      setCategories(data)
    })
  }, [])


  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10
        }}
    >
        {/*category card*/}
        {categories?.map(({_id, image, name}: {_id:string, image:string, name:string}) => (
            <CategoryCard
              key={_id}
              imgUrl= {urlFor(image).width(200).url()}
              title={name}
              />   
        ))}
    </ScrollView>
  )
}

export default Categories

