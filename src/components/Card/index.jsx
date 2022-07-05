import './style.css';

/* Card (props) ou Card ({name, time}) */
export function Card({name, time}){
   
  
  return (
    <div className='Card'>
      <strong>{name}</strong>
      <small> {time}</small>
    </div>

  )
}