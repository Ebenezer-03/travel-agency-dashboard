import React from 'react'
import { calculateTrendPercentage } from '~/lib/utils'
import { cn } from '~/lib/utils'



const StatsCard = ({
    headerTitle,
    total,
    lastMonthCount,
    currentMonthCount
    }:StatsCard   ) => {
        const{ trend,percentage} = calculateTrendPercentage(currentMonthCount,lastMonthCount);
        const isDecrement = trend === "decrement";


  return (
    <article className='stats-card'>
        <h3 className='text-base font-medium'>{headerTitle}</h3>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-4xl font-semibold'>{total}</h2>
                <div className='flex itesm-center gap-2 '>
                    <figure className='flex items-center gap-1'>
                        <img src={`/assets/icons/${isDecrement ? 'arrow-down-red.svg' : 'arrow-up-green.svg'}`} className='size-5'  alt='arrow'/>
                        <figcaption className={cn('text-sm font-semibold',{
                            'text-red-500': isDecrement,
                            'text-green-500': !isDecrement
                        })}>
                            {Math.round(percentage)}%
                        </figcaption>
                        <p className='text-sm text-gray-100 truncate'>vs last Month</p>
                    </figure>
                </div>
            </div>
            <div className='relative w-full h-20 overflow-hidden mt-2'>
              <img 
                src={`/assets/icons/${isDecrement ? 'decrement.svg' : 'increment.svg'}`} 
                className='w-full h-full object-contain'  
                alt='trend graph'
              />
            </div>
        </div>
    </article>
  )
}

export default StatsCard
