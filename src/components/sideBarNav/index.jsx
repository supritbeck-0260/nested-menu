import React, { useMemo } from 'react';
import { useState } from 'react/cjs/react.development';
import { randomColorGenerator } from '../../util/randomColorGenerator';
import './sidebar-nav.css';
let width = 300;
export default function SideBarNav({data}) {
    const [subMenu,setSubMenu] = useState([])
    const clickHandler = (data,index)=>{
        if(!Array.isArray(data)) return

        setSubMenu(prev=>{
            prev[index]=!prev[prev]
           return [...prev]
        })
    }
    const randomColor = useMemo(randomColorGenerator,[]);
    width = useMemo(()=>width-10,[])
  return(
      <>
       <div className='side-bar'>
            {
               Array.isArray(data) ? data.map((elem,index)=> <>
                 <div key={elem.key+index} className="label" style={{background:randomColor,width:`${width}px`}} onClick={()=>clickHandler(elem.subMenu,index)}> {elem.label}</div>
                {subMenu[index] && <SideBarNav data={elem.subMenu}/>}
                </>)
                : (data && <div className="label"> {data?.label}</div>)
                
            }


       </div>
      
      </>
  );
}
