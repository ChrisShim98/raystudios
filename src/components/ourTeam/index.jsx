import React from 'react'
import TeamCard from '../teamCard'

const OurTeam = () => {
  return (
    <div className='w-screen min-h-screen bg-white flex flex-col justify-center'>
      <h1 className='text-4xl md:text-5xl font-bold w-full text-center p-10 pointer-events-none'>Meet the team</h1>
      <div className='w-screen grid place-items-center'>
        <div className='flex flex-col gap-5'>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-10'>
              <TeamCard role={'Chief Financial Officer'} staffNumber={2}/>
              <TeamCard role={'Head of Marketing'} staffNumber={4}/>
              <TeamCard role={'Executive Producer'} staffNumber={3}/>
              <TeamCard role={'Chief Technology Officer'} staffNumber={5}/>
              <TeamCard role={'Head of Risk Management'} staffNumber={6}/>
              <TeamCard role={'Lead Singer'} staffNumber={1}/>
            </div>        
          </div>
      </div>
        
    </div>
  )
}

export default OurTeam