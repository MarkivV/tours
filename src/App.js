import {useEffect, useState} from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project'


function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const removeTicket = (id) =>{
    setTours([...tours.filter((tour)=> tour.id !== id)])
  }

  const fetchTours = async () =>{
    setLoading(true)

    try {
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setTours(tours)
    }catch (error){
      setLoading(false)
    }
    console.log(tours)
  }

  useEffect(()=>{
    fetchTours()
  }, [] )

  if(loading){
    return (
        <Loading/>
    )
  }

  if(tours.length === 0){
    return (
        <main>
          <div className="title">
              <h2>No tours left</h2>
              <button className="btn" onClick={fetchTours}>Refresh</button>
          </div>
        </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeTicket={removeTicket} />
    </main>
  );
}

export default App;
