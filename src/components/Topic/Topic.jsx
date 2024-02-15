import React from 'react'
import cse from '../Json/cse.json'

function Topic() {
  return (
    <>
    <div>
        
    {
        cse.map((index)=>{
            return <div>{index.Sub.map((i)=>{
                return <div>{i.Topic}</div>
            })}</div>
        })
    }
    </div>

    </>
  )
}

export default Topic