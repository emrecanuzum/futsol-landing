import Image from 'next/image'
import React from 'react'
import FootballField from "../../public/field.png"

const LandingPage = () => {
  return (
    <div className='bg-[#160023] h-screen'>


<div className=' justify-center flex max-w-screen'>
<div className='w-full h-screen text-auto justify-center flex'>
<Image className='w-[96vw] mt-10 aspect-auto ' src={FootballField} alt='football-field'/>
<h1 className='text-[#160023] text-[100px] z-50  fixed '>We will be here soon</h1>
</div>

</div>
</div>
  )
}

export default LandingPage