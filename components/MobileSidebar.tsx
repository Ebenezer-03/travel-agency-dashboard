import { Sidebar, SidebarComponent } from '@syncfusion/ej2-react-navigations'
import React from 'react'
import { Link } from 'react-router'
import { sidebarItems } from '~/constants'

const MobileSidebar = () => {
    let sidebar: SidebarComponent


  return (
    <div className='mobile-sidebar wrapper'>
        <header>
            <Link to='/'>
                <img 
                  src='/assets/icons/logo.svg'
                  alt="logo"
                  className='size-[30px]'
               />

               <h1>TrekTales</h1>
            </Link>

            <button onClick={()=>{{
                //@ts-ignore
                sidebar.toggle()
            }}}>
                <img src="/assets/icons/menu.svg" alt="menu" className='size-7'/>
            </button>
        </header>

        <SidebarComponent
            width={270}
            //@ts-ignore
            ref={(Sidebar)=>Sidebar = sidebar}
            created={()=> sidebar.hide()}
         >
        </SidebarComponent>
      
    </div>
  )
}

export default MobileSidebar
