import React from 'react'
import './NewCollection.css'
import new_collection from '../dataJSON/new_collections'
import Item from "../Items/Item";

const NewCollections = () => {
  return (
    <div className='new-collectons'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="collections">
            {new_collection.map((item,i)=>{
                 return (
                    <Item
                      key={i}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                    />
                  );
            })}
        </div>
    </div>
  )
}

export default NewCollections