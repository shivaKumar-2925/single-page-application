import React from 'react'
import ItemList from './ItemList'
import { Dataset } from './Database'
const Service = () => {
  return (
    <div>
      <div className="serviceHtl">
        <h1>WELLCOME TO PARADISE</h1>
        <h3>Here's your delicious food item list</h3>
      <div className="service">
    {Dataset.map((val,ind)=>{
      return(
      <ItemList key={ind} item={val.img} title={val.title} />
    )})}
    </div>
    </div>
    </div>
  )
}

export default Service
