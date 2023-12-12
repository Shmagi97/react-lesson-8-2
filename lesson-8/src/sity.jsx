import { useParams } from "react-router-dom"


function Sity() {
     
    const params = useParams()
    
    return (
       <div><p> sity page this is: {params.name}</p></div>
    )
  }

  export default Sity