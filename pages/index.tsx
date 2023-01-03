
import { NextPage } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts/Layout'
import { ListResponse, Result } from '../interfaces/pokemon-list';


interface Props {
  pokemons: Result
}


const HomePage:NextPage<Props> =({pokemons})=> {

  

 
  return (
    <>
      <Layout title='Pokemon'>
        
      </Layout>
    </>
  )
}
 export const getStaticProps  = async () =>{

   const {data} = await pokeApi.get<ListResponse>("pokemon?limit=151")
   console.log(data)
  
  return {
    props:{
       
    }
  }
 }
 


export default HomePage