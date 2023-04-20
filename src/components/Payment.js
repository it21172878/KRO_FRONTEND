import React from 'react'

// import {BiEdit} from "react-icons/bi"
// import {AiFillDelete} from "react-icons/ai"

const Payment = ({email, card_holder_name, card_number, end_date, cvv_number, updateMode, deletePayment}) => {
  return (
    <div className='payment'>
        <div className='text'>
            {email}
            {card_holder_name}
            {card_number}
            {end_date}
            {cvv_number}
        </div>
        <div className='icons'>
            <button onClick={updateMode}>UPDATE</button>
            <button onClick={deletePayment}>DELETE</button>
            {/* <BiEdit className='icon' onClick={updateMode}/> */}
            {/* <AiFillDelete className='icon' onClick={deletePayment} /> */}
        </div>
    </div>
  )
}

export default Payment