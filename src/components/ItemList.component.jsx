import React from 'react'
import './styles/item-list.styles.css'
const ItemList=(props)=>
{
    const {items,removeItem}=props
    return(
        <div className="item-list">
            Item List
            <span className="right-span total-item">{items.length} Item(s)</span>
            <table className="item-table">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Item Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <thead>
                    {items.map((item,index)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td><a onClick={()=>removeItem(index)} className="cancle-btn">X</a></td>
                        </tr>
                    ))}
                    
                </thead>
            </table>
        </div>
    )
}

export default ItemList