import React, { Component, createRef} from 'react'
import './styles/add-items.styles.css'
import ItemList from './ItemList.component'

class AddItem extends Component{
    constructor()
    {
        super()
        this.state={
            items:[],
            error:''
        }

        this.itemName=createRef()

        this.handleSubmit=this.handleSubmit.bind(this)
        this.removeItem=this.removeItem.bind(this)
    }

    handleSubmit(e)
    {
        e.preventDefault()
        if(this.itemName.current.value!='')
        {
            const item={
                id:Date.now(),
                name:this.itemName.current.value
            }

            if(this.checkDuplicate(this.state.items,this.itemName.current.value))
            {
                this.setState({items:[...this.state.items,item]})
                this.itemName.current.value=''
                this.setState({error:''})
            }else
            {
                this.setState({error:'Item already added !!'}) 
            }
        }else
        {
            this.setState({error:'Write an item name !!'})
        }
    }

    checkDuplicate(items,itemName){
        const exist=items.find(item=>item.name==itemName)
        if(exist)
        {
            return false
        }
        return true
    }


    removeItem(item_index){
        const filtered_items=this.state.items.filter((item,index)=>index!=item_index)
        this.setState({
            items:filtered_items
        })
    }

    render(){
        return(
            <div className="add-item-form">
                <form action="" method="post" onSubmit={this.handleSubmit}>
                    <label htmlFor="">Add New Item </label>
                    <span className="error-text">{this.state.error}</span>
                    <div className="form-items">
                        <input type="text" ref={ this.itemName } placeholder="Item Name" name="item"/>
                        <button type="submit" className="submit-btn">Add</button>
                    </div>
                </form>
                <ItemList items={this.state.items} removeItem={this.removeItem}/>
            </div>
        )
    }
}

export default AddItem