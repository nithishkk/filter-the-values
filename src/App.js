import React from "react";
import "./style.css";


const Data=[
  {
    id:1,
    name:"nithish"
  },
  
  {
    id:2,
    name:"react"
  },
  
  {
    id:3,
    name:"java"
  },
  
  {
    id:4,
    name:"javascript"
  },
  
  {
    id:5,
    name:"payton"
  },
  {
    id:5,
    name:"datascince"
  },
  {
    id:5,
    name:"mathematic"
  },
  {
    id:5,
    name:"pysics"
  },
]

export default function App() {
  const[search,setSearch]=React.useState('')
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <br/>
     {Data.filter(subject=>subject.name.toLowerCase().includes(search)).map(nameCity=>{
       return (
         <div style={{"border":"1px solid black","padding":"10px","margin":"10px","maxWidth":"70px"}}>
         {nameCity.name}
         </div>
       )
     })}

    </div>
  );
}
