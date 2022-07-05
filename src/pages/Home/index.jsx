import { useState, useEffect } from 'react'
import './style.css'
import { Card } from '../../components/Card'


export default function Home() {
  
  /* useState*/
  const [personName, setPersonName] = useState();
  const [persons, setPersons] = useState([])
  const [user, setUser] = useState ({name: '', avatar:''})

  function handleAddPerson(){
     const newPerson ={
      name : personName,
      time: new Date().toLocaleDateString("pt-br", { 
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit',
      })
     };
    
  setPersons(prevState => [...prevState, newPerson])
  }

/* useEffect*/

  useEffect(() => {
     fetch('https://api.github.com/users/XFBC')
     .then(response => response.json())
     .then(data => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
        

     })

  },[])


  return (
    <div className="container">
     <h2>Aniversário</h2>
     
      <header>
        <h3> Lista de presença</h3>
         <strong> {user.name}</strong>
         <img src={user.avatar} alt="foto de perfil" />
      </header>
     
      <input 
      type="text"  
      placeholder='digite o nome...'
      onChange={e => setPersonName(e.target.value)}/>
      <button 
         type="button"
         onClick={handleAddPerson}
      >
         adicionar
      </button>
        
        {
         persons.map(person => (
           <Card
           key={person.time}
           name={person.name} 
           time={person.time}
           />
           ))
        }


        
       
    </div>

     
  )
}
