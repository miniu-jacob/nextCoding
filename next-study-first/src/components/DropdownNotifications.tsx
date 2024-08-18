import React from 'react';
import { Button } from './ui/button';
import { Bell, BellIcon, ChevronRight } from 'lucide-react';
import { CommandDemo } from './Command';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

const DropdownNotifications = () => {
    const [notifications, setNotifications] = useState<any>([
        {
            text: '쇼핑몰',
            date: '02-01-2024',
            read: false,
        },
        {
            text: '개발해',
            date: '08-18-2024',
            read: true,
        },
    ]);
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant='outline' size='icon'>
                        <BellIcon className='h-8 w-8'></BellIcon>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    {notifications.map((item: any, key: number) => (
                        <DropdownMenuItem
                            key={key}
                            className='gap-2 flex p-1 cursor-pointer hover:bg-neutral-50 transition items-start '
                        >
                            <div
                                className={`h-3 w-3 rounded-full my-1 ${
                                    !item.read
                                        ? 'bg-green-500'
                                        : 'bg-neutral-200'
                                }`}
                            ></div>
                            <div>
                                <p>{item.text}</p>
                                <p className='text-xs text-neutral-500'>
                                    {item.date}
                                </p>
                            </div>
                        </DropdownMenuItem>
                    ))}
                    {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                    {/* <DropdownMenuSeparator /> */}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default DropdownNotifications;
