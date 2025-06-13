import React from 'react'
import { Link, NavLink } from 'react-router'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

const Navitems = () => {
  const user = {
    name: "Ebenezer S",
    email: "itzmeebenezer2007@gmail.com",
    imageUrl: '/assets/images/david.webp'
  }


  return (
    <section className='nav-items'>
        <Link to='/' className='link-logo'>
            <img src='/assets/icons/logo.svg' alt='Logo' className='size-[30px]'/>
            <h1>TrekTales</h1>
        </Link>

        <div className='container'>
          <nav>
            {sidebarItems.map(({id,href,icon,label}) => (
                <NavLink to={href} key={id}>
                  {({isActive}: {isActive: boolean})=>(
                      <div className={cn('group nav-item',{
                        "bg-primary-100 !text-white":isActive
                      })}>
                        <img
                          src={icon}
                          alt={label}
                          className={`size-[20px] ${isActive ? 'brightness-0 invert' : ''}`}
                        />
                        {label}
                      </div>
                  )}
                </NavLink>
            ))}
          </nav>

          <footer className='nav-footer'>
            <img src={user ?.imageUrl  || '/assets/images/david.webp'} alt={user?.name || 'David'}/>
            <article>
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </article>
            
            <button onClick={()=>{
              console.log({message:'logout'})
            }}
            className='cursor-pointer'
            >
              <img 
                src='/assets/icons/logout.svg'
                alt='logo'
                className='size-6'  
              />
            </button>
          </footer>
        </div>
        
    </section>
  )
}

export default Navitems
