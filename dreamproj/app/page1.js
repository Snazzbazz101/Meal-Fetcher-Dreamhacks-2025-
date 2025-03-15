<<<<<<< HEAD
<<<<<<< HEAD
import { Button } from '@/components/ui/button'
import ComboboxDemo from '@/dropmenu'
import React from 'react'

const Page1 = () => {
  return (
    <div className=" h-screen m-0 flex flex-col justify-center items-center">
      <h1 className='text-4xl font-bold mb-4'>
        Meal Fetcher
      </h1>
      <div className="flex flex-col justify-center items-center"> 
        <ComboboxDemo />
        <Button className="bg-green-500 mt-4">
          Enter!
        </Button>
      </div>
    </div>
  )
}

export default Page1
=======
=======
import { Button } from '@/components/ui/button'
>>>>>>> a74b434 (enter button)
import ComboboxDemo from '@/dropmenu'
import React from 'react'

const page1 = () => {
return (
    <div style={{ backgroundColor: 'lightyellow', height: '100vh', margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ComboboxDemo />
        <Button className='bg-green-500'>
            Enter!
        </Button>
    </div>
)
}

export default page1
>>>>>>> e39c158 (Added drop down menu)
