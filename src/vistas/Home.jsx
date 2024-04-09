import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../context/GlobalContext"



export function Home() {
  const { ejemploGlobal, pepe } = useContext(GlobalContext)

  const [resJson, setResJson] = useState()
  useEffect(() => {
    const lat = '33.44'
    const lon = '4.04'
    const key = 'bd7f41d63f36dc33e4942095240b55c8'
    const ciudad = 'badalona'

    async function tiempo() {


      // API para latitud y longitud de ciudad
      const geo = await fetch(`https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?outSr=4326&forStorage=false&outFields=*&maxLocations=5&singleLine=${ciudad}&f=json`)
      const geoJ = await geo.json()
      const newLat = geoJ.candidates[0].location.y
      const newLon = geoJ.candidates[0].location.x
      console.log('geo', geoJ.candidates[0]);

      // API para el tiempo en ciudad
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${newLat}&lon=${newLon}&&lang=es&units=metric&appid=${key}`)
      const resJ = await res.json()
      setResJson(resJ)
      console.log('tiempo: ', resJ);

      // API para imagen de tiempo
      const icono = '10d@x2'
      const imagen = await fetch(`https://openweathermap.org/img/wn/10d@2x.png`, { mode: 'no-cors'})
      const imagenJ = await imagen.json()

      console.log('imagen :', imagenJ);


    }

    tiempo()
  }, [])
  return (
    <div>
      <h1>Vista Home </h1>
      <p>{JSON.stringify(resJson)}</p>
    </div>



  )
}