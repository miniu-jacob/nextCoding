'use client';
import DropdownNotifications from './DropdownNotifications';


export default function RightHeader() {
    
    return (
        <div className='grid grid-cols-2 p-4 gap-2 border-b items-center'>
            {/* <Command1Demo></Command1Demo> */}
            <div></div>
            
            <div className='flex items-start justify-end'>
                <DropdownNotifications></DropdownNotifications>
                
            </div>
        </div>
    );
}
