import { Link } from "react-router-dom"
import './home.css'

function Home() {

    const list = [
        'tbilisi',
        'batumi',
        "qutaisi"

    ]

    return ( 
      
        list.map((el)=> {
            return(

                <div className="div2">   <Link to={`/sity/${el}`}>{el}</Link>   </div>
            
            )
        })

   
    )
  }

  export default Home