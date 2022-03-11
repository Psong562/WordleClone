import React from 'react'
import { letters } from '../Data/Letters'
import './Keyboard.css'

export const Keyboard = () => {
  return (
    <>
      <div className="keyboardRows">
        {letters.map((item, index) => (
          <div className="row">
            {item.map((letters, lettersIndex) =>
              <button key={lettersIndex}>{letters}</button>
            )}
          </div>
        ))
        }

      </div>


    </>
  )
}

export default Keyboard
