import { Navbar as UI, Spacer, Text } from "@nextui-org/react";
import Image from "next/image";
import { FunctionComponent } from "react"



export const Navbar:FunctionComponent= () => {
   

   
  return (
    <div>
        <UI  style ={{ marginBottom: 10}}variant="floating" isBordered  maxWidth="fluid">
            <Image width={70} height={70}  alt ="Imagen de Logo"src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/132.png"} />
            <Text color="yellow" h1>Pokemon</Text>
            <Spacer x={2} />
            <Text h3 css={{flex:2}}> Favoritos</Text>
            
        </UI>
    </div>
  )
}
