import one from "../assets/1.webp"
import two from "../assets/2.webp"

function Details(){
  return(
    <div className='details'>
      <div className='det-1'>
        <img src={one} alt="one"></img>
        <p>somemoreeeeeeee</p>
      </div>
      <div className='det-2'>
        <img src={two} alt="two"></img>
        <p>somemoreeeeeeee</p>
      </div>
    </div>
  )
}
export default Details;