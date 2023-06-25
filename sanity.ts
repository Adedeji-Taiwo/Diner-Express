import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client =  createClient({
    projectId: 'm5uy7mk0',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03',
  })

  const builder = imageUrlBuilder(client);
  export const urlFor = (source: any) => builder.image(source);

  export default client


   //CORS policy exception- run this for localhost exception
   // sanity cors add http://localhost:19006