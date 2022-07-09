import React from 'react'
import Question from './Question'
import {Qns} from '../Qn.js'


const Slider = () => {

    // console.log(Qns)
  return (
    <div>
        <h1>Slider</h1>

        {
            Qns.map(item => (
                <Question key={item.id} item={item}/>
            ))
        }


        {/* <Question Qns={Qns}/> */}
        <button>Next</button>
        <button>Prev</button>
    </div>
  )
}

export default Slider