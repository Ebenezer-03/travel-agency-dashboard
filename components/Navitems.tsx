import React from 'react'
import { Link, NavLink, useLoaderData, useNavigate} from 'react-router'
import { logoutUser } from '~/appwrite/auth'
import { sidebarItems } from '~/constants'
import { cn } from '~/lib/utils'

const Navitems = ({handleClick}:{handleClick:()=>void}) => {
  const user = useLoaderData();
  const navigate = useNavigate();

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
                      })} onClick={handleClick}>
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
            
            <button onClick={async()=>{
              await logoutUser();
              navigate("/sign-in")
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
