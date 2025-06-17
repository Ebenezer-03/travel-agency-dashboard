import React from 'react'
import { Outlet, redirect } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { MobileSidebar, Navitems } from 'components';
import { account } from '~/appwrite/client';
import { getExistingUser, storeUserData } from '~/appwrite/auth';


export async function clientLoader() {
  try{
      const user = await account.get();

      if(!user.$id) return redirect('/sign-in')
        const existingUser = await getExistingUser(user.$id)
      if(existingUser?.status === 'user'){
        return redirect('/');
      }
      return existingUser ?.$id ? existingUser: await storeUserData();

  }catch(e){
      console.log("Error in clientLoader",e)
      return redirect('/sign-in')
  }
}


const AdminLayout = () => {
  return (
    <div className='admin-layout'>
      <MobileSidebar />
      
      <aside className='w-full max-2-[270px] hidden lg:block lg:col-start-1'>
        <SidebarComponent width={270} enableGestures={false}>
          <Navitems handleClick={() => {}}/>
        </SidebarComponent>
        </aside>
        <aside className='children lg:col-start-2'>
            <Outlet/>
        </aside>

    </div>
  )
}

export default AdminLayout
