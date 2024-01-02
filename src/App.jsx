import { useState } from 'react'
import './App.css'
import Profile from './components/Profile/Profile';
import PropsExample from './components/Profile/PropsExample/PropsExample';

function App() {

  const [name, setNAme] = useState ("React");

  function onClickMandler(){
    setNAme("Vite");
    setNAme ((prev) => {
      return prev + "Vite";
    })
  }

  return (
    <>
    <div className="navbar"></div>
    <div className="container">
      <h1>Mon Profil Vite + React</h1>
      <div className="mesinfos">
      <PropsExample name={name} childClickHandler=(onClickHandler)/>
      <Profile />
      </div>
      <div className="majinfos">
      <div className="card" >{name}</div>
      <button onClick={onClickMandler}>
        Click me !
      </button>
      <Profile />
      <PropsExample />
      </div>
    </div>
    <div className="footer"></div>
    </>
  )
}

export default App
