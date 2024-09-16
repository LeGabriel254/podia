import { useState } from 'react'
import './App.css'
import React from 'react';
import {Button} from './components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./components/ui/navigation-menu"
 import Main from './components/Main';

function App() {

  return (
   <>
   <Main /> 
   
   <NavigationMenu className='flex flex-row ... absolute left--100rem top-0  ...  p-12 ms:p--8'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Feature</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
            
                    <div className="mb-2 mt-4 font-light ... ">
                      <ul>
                       
                      <li><a href="">To do list</a></li>
                      <li><a href="">Calender</a></li>
                      <li><a href="">Reminders</a></li>
                      <li> <a href="">Plannings</a></li>
                      
                      </ul>
                 </div>
                  </a>
                </NavigationMenuLink>
              </li>
              </ul>
        
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
            <ul>
                       
                       <li><a href="">History</a></li>
                       <li><a href="">Our Team</a></li>
                       <li><a href="">Blog</a></li>
                       </ul>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className='text-gray-500	color: rgb(107 114 128);'>
              Careers
              </div>
            
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </a>
          <div className="items-center gap-1 absolute ...padding-left: 0.25rem
padding-right: 0.25rem;  ">
   <Button variant="ghost" className=' absolute top-2 right-2'>Login</Button>
   <Button variant="outline" className='border-neutral-950 absolute top-0 right-0 '>Register</Button> 
   </div> 
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
   
    {/* <Button variant="outline" className='bg-gray-800 text-white px-6 py-2 place-content-center flex items-center  justify-self: center;'>Learn More</Button> */}
   </>
  )
}

export default App
