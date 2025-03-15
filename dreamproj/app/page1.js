import { Button } from '@/components/ui/button'
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