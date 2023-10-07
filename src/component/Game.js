import React, { useState } from 'react'
import '../App.css'
function Game({title , content }) {
    const words = ['rock' , 'scissors' , 'paper'];

    const winner = ['انت محظوظ' , 'يولد شنو انت' , 'الي مثلك لازم يسووله تمثال' ,'عقلك مال انشتاين','لو عندي حظك يبو شسوي'];
    const lossing = [' روح انتحر احسلك' , 'حظك زفت والله' , 'سلملي اذا فزت' ,'تعلم وتعال العب وياي','ههههههههههه لتضوج كلنا نخسر عادي'];
    const [message , setMessage] = useState('جاي تتحداني مو هههههه');
    const [win , setWin] = useState(false);
    const chooseWord = (word) =>{
        let num =  Math.floor(Math.random() * words.length);
        let current_winner = Math.floor(Math.random() * winner.length);
        let current_loosing = Math.floor(Math.random() * lossing.length);
        if(word === words[num]){
            setMessage(winner[current_winner])
            setWin(true);
            console.log(word + ' ' + words[num])
        }else{
            setMessage(lossing[current_loosing])
            setWin(false)
            console.log(word + ' ' + words[num])
        }
    }
    return (
        <div className='game' >
            <img className='image' src={require('../assets/rock-game.jpg')} alt="" />
            <div className="btn-options">
                <span title='حجر' onClick={()=>chooseWord('rock')}><img src={require('../assets/rock.png')} alt="" /></span><br />
                <span title='ورقة' onClick={()=>chooseWord('scissors')}><img src={require('../assets/paper.png')} alt="" /></span><br />
                <span title='مقص' onClick={()=>chooseWord('paper')}><img src={require('../assets/scissors.png')} alt="" /></span>
            </div>
            <div className='message'>
                <p className='win-message'>{win ? 'عفية بطل ' : ''}</p>
                <p className={win ? 'win-message': 'loss-message'}>{win ? message : message}</p>
            </div>
        </div>
    )
}

export default Game
