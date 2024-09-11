import layout  from "./layout";
import React from "react";

 export const NavLink = (props) =>{
  const {text, url, isDropdown} = props

  return <a href={url}>{text} {isDropdown ?? ">"}

  </a>
}
const nav = () => {
  const navLinksData = [
    {
    text:'Features',
    url:'./features',
    isDropdown:true,
  },
  {
    text:'Examples',
    url:'.examples',
  },
  {
    text:'Pricing',
    url:'.pricing',
  },
  {
    text:'Demo',
    url:'./demo',
  },

  {
    text:'Resources',
    url:'./resources',
    isDropdown:true,
  },
  ]
  return <layout>
<div style={{
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  width:'100%'
}}>
  <div>
    <logo />  
    {navLinksData.map((navLink)=>{
return(
  <navLink 
  text={navLink.text}
  url={navLink.url}
  isDropdown={navLink.isDropdown}/>
)
    
    })};

  </div>
  <div>
    <navLink
    text='Login'
    url='/login'/>
    <Button 
    text='Sign up free'
    handleClick={
      () => {}
    }/>
  </div>

</div>
  </layout>
}

export default nav;