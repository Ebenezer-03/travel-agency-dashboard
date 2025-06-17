import React from 'react'
import { Header, StatsCard, TripCard } from '../../../components'
import {dashboardStats, user, allTrips} from "~/constants/index"

const {totalUsers, UsersJoined, totalTrips, tripsCreated, userRole} = dashboardStats


const dashboard = () => {

  return (
    <main className='dashboard wrapper'>
      {/* Mobile view */}
      <div className="block md:hidden w-full px-4 mt-6">
        <Header
          title= {`Welcome ${user?.name ?? "Guest"}🖐️`}
          description="Track activity, trends and popular destinations in real time"
        />

        <div className="flex flex-col gap-6 mt-6">
            <StatsCard
              headerTitle = "Total Users"
              total ={totalUsers}
              currentMonthCount ={UsersJoined.currentMonth}
              lastMonthCount = {UsersJoined.lastMonth}
            />
            <StatsCard
              headerTitle = "Total Trips"
              total ={totalTrips}
              currentMonthCount ={tripsCreated.currentMonth}
              lastMonthCount = {tripsCreated.lastMonth}
            />
            <StatsCard
              headerTitle = "Active Users"
              total ={userRole.total}
              currentMonthCount ={userRole.currentMonth}
              lastMonthCount = {userRole.lastMonth}
            />
           </div>
          <section className='container'>
            <h1 className='text-xl font-semibold text-dark-100'>Created Trips</h1>
              <div className='trip-grid'>
                {allTrips.slice(0,4).map(({id,name,imageUrls,itinerary,tags,estimatedPrice}) =>(
                  <TripCard
                    key={id}
                    id={id.toString()}
                    name={name}
                    imageUrl={imageUrls[0]}
                    location={itinerary?.[0]?.location ?? ''}
                    tags={tags}
                    price={estimatedPrice}
                    
                    />
                ))}
              </div>
          </section>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block w-full">
        <div className="flex flex-col justify-start max-w-6xl mx-auto mt-6">
          <Header
            title= {`Welcome ${user?.name ?? "Guest"}🖐️`}
            description="Track activity, trends and popular destinations in real time"
          />

          <div className="flex flex-wrap justify-center gap-6 mt-6 w-full">
              <StatsCard
                headerTitle = "Total Users"
                total ={totalUsers}
                currentMonthCount ={UsersJoined.currentMonth}
                lastMonthCount = {UsersJoined.lastMonth}
              />
              <StatsCard
                headerTitle = "Total Trips"
                total ={totalTrips}
                currentMonthCount ={tripsCreated.currentMonth}
                lastMonthCount = {tripsCreated.lastMonth}
              />
              <StatsCard
                headerTitle = "Active Users"
                total ={userRole.total}
                currentMonthCount ={userRole.currentMonth}
                lastMonthCount = {userRole.lastMonth}
              />
            </div>
            <section className='container'>
              <h1 className='text-xl font-semibold text-dark-100'>Created Trips</h1>
                <div className='trip-grid'>
                  {allTrips.slice(0,4).map(({id,name,imageUrls,itinerary,tags,estimatedPrice}) =>(
                    <TripCard
                      key={id}
                      id={id.toString()}
                      name={name}
                      imageUrl={imageUrls[0]}
                      location={itinerary?.[0]?.location ?? ''}
                      tags={tags}
                      price={estimatedPrice}
                      
                      />
                  ))}
                </div>
            </section>
          
        </div>
      </div>
    </main>
  )
}

export default dashboard
