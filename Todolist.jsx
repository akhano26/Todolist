
import { useState,  } from "react"
import "./Todolist.css"
import { IoAdd } from "react-icons/io5";
import { FaExchangeAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
export default function Todolist(){

const [listbuy,setlistbuy]=useState([{item:'Milk',date:'2023-03-03'},{item:'Egg',date:'2023-04-01'}])
const [newitem,setnewitem]=useState('')
const [searchlist,setsearchlist]=useState([])
const [newdate,setnewdate]=useState('');
const [buttonstate,setbuttonstate]=useState('Add')
const [indexitem,setindexitem]=useState('');
const [heading,setheading]=useState('Enter New Item');
const handlenewitem=()=>{
const newpurchase={item:newitem,date:newdate}
setlistbuy([newpurchase,...listbuy])
}

const handledeleteitem=(index)=>{
  const newList = listbuy.filter((_, i) => i !== index);
  setlistbuy(newList)
}

const handleedititem=(index)=>{
 setnewitem(listbuy[index].item)
 setnewdate(listbuy[index].date)
setbuttonstate('Change')
setheading("Edit")
 setindexitem(index);
}
const changeitem=()=>{
  console.log("I am change")
  const newlist=[...listbuy];
newlist[indexitem]={
  item:newitem,
  date:newdate,
}
setlistbuy(newlist)
setheading('Enter new')
setnewdate('')
setbuttonstate('Add')
setnewitem('')
}

const handlesearch=(value)=>{
  const searchitem=value;
  const newlist=[...listbuy]
  const search= newlist.filter(copy=>copy.item.toLowerCase()===searchitem.toLowerCase());
  setsearchlist(search);

}
 return(
  <div className="container  containermain">
    <div style={{display:'flex', justifyContent:'center'}}><h2>Todo List</h2></div>
  <div className="row singlerowinput">
    <h3>{heading} Item</h3>
    <div className="col inputdiv">
      <input type="text"  style={{
          border: 'none',         // Remove border
          background: 'none',     // Remove background
          outline: 'none',        // Remove outline
          color: 'inherit',       // Use the default text color
                  
          margin: '0',            // Remove margin
          width: '100%',  
          padding:'.5rem'        // Set width to 100% of the container
        }} onChange={(e)=>setnewitem(e.target.value)} placeholder="Enter Item here" value={newitem}/>
    </div>
    <div className="col">
     <input
     style={{
      border: 'none',         // Remove border
      background: 'none',     // Remove background
      outline: 'none',        // Remove outline
      color: 'inherit',       // Use the default text color
              
      margin: '0',            // Remove margin
      width: '100%',  
      padding:'.5rem'        // Set width to 100% of the container
    }}
      onChange={(e)=>setnewdate(e.target.value)}  value={newdate}
     type="date" />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor:'pointer' }} onClick={() => { if (buttonstate === 'Add') { handlenewitem() } else { changeitem() } }} className="col">
  {buttonstate === 'Add' ? <IoAdd /> : <FaExchangeAlt />}
</div>

  </div>
  <div className="searchbar">
  <h3 style={{marginTop:'1rem'}}>All Items</h3>
  <div><input onChange={(e)=>{handlesearch(e.target.value)}} placeholder="Search"  style={{
    
    border: 'none',         // Remove border
    background: 'none',     // Remove background
    outline: 'none',        // Remove outline
    color: 'inherit',       // Use the default text color
            
    margin: '.2rem',            // Remove margin
    width: '100%',  
    padding:'.5rem'        // Set width to 100% of the container
  }} type="text" name="" id="" /> <CiSearch/> </div>
  </div>
  
    {searchlist.map((purchase,index)=>(
      <div key={index} className="row singlerow">
      <div className="col">
       {purchase.item}
      </div>
      <div className="col">
     {purchase.date}
      </div>
      <div style={{cursor:'pointer'}} onClick={()=>{handleedititem(index)}}  className="col">
      <CiEdit/>
      </div>
      <div style={{cursor:'pointer'}}  onClick={()=>{handledeleteitem(index)}} className="col">
     <MdDelete/>
      </div>
     </div>
    ))}
  <div className="mapping">
  {listbuy.map((purchase,index)=>(
 <div key={index} className="row singlerow">
 <div className="col">
  {purchase.item}
 </div>
 <div className="col">
{purchase.date}
 </div>
 <div style={{cursor:'pointer'}} onClick={()=>{handleedititem(index)}}  className="col">
 <CiEdit/>
 </div>
 <div style={{cursor:'pointer'}}  onClick={()=>{handledeleteitem(index)}} className="col">
<MdDelete/>
 </div>
</div>

  ))}
  </div>
 
 
</div>
 )
}
