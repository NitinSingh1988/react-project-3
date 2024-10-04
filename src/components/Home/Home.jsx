
import style from './home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {

 const navigate = useNavigate();

const handleClick = (e) =>{
    navigate('/play');

        
}

  return (
    <main className={style.diceContainer}>
      <div className={style.diceImage}>
       <img src="./images/dices-1.png" alt="" />
      </div>
      <div className={style.playNow}>
        <h1>Dice Game</h1>
        <button onClick={handleClick}>Play Now</button>
      </div>
     </main>
  )
}

export default Home;