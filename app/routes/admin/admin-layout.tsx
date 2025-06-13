import React from 'react'
import { Outlet } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { MobileSidebar, Navitems } from 'components';

const AdminLayout = () => {
  return (
    <div className='admin-layout'>
      <MobileSidebar />
      
      <aside className='w-full max-2-[270px] hidden lg:block'>
        <SidebarComponent width={270} enableGestures={false}>
          <Navitems />
        </SidebarComponent>
        </aside>
        <aside className='children'>
            <Outlet/>
        </aside>

    </div>
  )
}

export default AdminLayout
