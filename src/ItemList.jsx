import React from 'react'

const ItemList = (props) => {
  return (
    <div>
      <div className="mainItem">
     <div className="card">
       <img src={props.item} width="240px" height="180px" />
       <h2>{props.title}</h2>
       <p>
         order this delicious food from near by you and get rewards by paying through online payment
       </p>
       <button className='mybtn'>Order-Now</button>
     </div>
    </div>
    </div>
  )
}

export default ItemList