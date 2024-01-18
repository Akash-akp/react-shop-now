import React from 'react'
import Card from './Card'

const Cards = ({products , categories, selected}) => {
    let newprd = products.filter((prd)=>{
        // console.log(prd.category,categories[i]);
        return prd.category===categories[selected];
    })
    if(selected===0){
        newprd = products;
    }
  return (
    <div className='my-6 flex justify-center'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>
        {
            newprd.map((prd)=>{
                return (<Card key={prd.id} prd={prd}></Card>)
            })
        }
        </div>
    </div>
  )
}

export default Cards
