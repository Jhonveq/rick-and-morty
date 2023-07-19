
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormLocation from './components/FormLocation'

function App() {

  const [location, setLocation] = useState()
  const [idLocation, setIdLocation] = useState(getRandomNumber(126))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    
    setIsLoading(true)

    axios.get(url)
        .then(res => {
          setLocation(res.data)
          setHasError(false)
        })
        .catch(err => {
          console.log(err)
          setHasError(true)
        })
        .finally (() => {setIsLoading(false)})
  }, [idLocation])

  console.log(location)
  

  return (
    <>
      <div>
        <div className='title'>
          <h1>Rick & Morty App</h1>
        </div>
        <FormLocation
          setIdLocation = {setIdLocation}
        />
        {
          isLoading ? (<h2> Loading...</h2>) : (
          hasError ? (<h1>Please provide a number from 1 to 26</h1>)
            : (
        <>
        <LocationInfo
          location ={location}
        /> 
        <div className='resident-container'>
          {
            location?.residents.map(url => (
              <ResidentCard 
                key={url}
                url = {url}
              />
            ))
          }
        </div>
        </>
      )
    )
    }
      </div>
    </>
  )

}

export default App
