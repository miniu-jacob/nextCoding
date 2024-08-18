import React from 'react';
import UserItem from './UserItem';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from './ui/command';
import { Bell, CirclePlus, FileSearch2, MonitorPlay, Settings, ShoppingBasket, SquareUserRound } from 'lucide-react';


const Sidebar = () => {
    const menuList = [
        {
            group: 'General',
            items: [
                {
                    link: '/Shopping',
                    icon: <ShoppingBasket />,
                    text: 'Shopping Mall',
                },
                {
                    link: '/redux-counter',
                    icon: <CirclePlus />,
                    text: 'Redux Counter',
                },
                {
                    link: '/contact',
                    icon: <SquareUserRound />,
                    text: 'Contact',
                },
            ],
        },
        {
            group: 'Practice',
            items: [
                {
                    link: '/react-query',
                    icon: <FileSearch2 />,
                    text: 'React Query',
                },
                {
                    link: '/netflix',
                    icon: <MonitorPlay />,
                    text: 'Netflix',
                },
                {
                    link: '/others',
                    icon: <Bell />,
                    text: 'Notifications',
                },
                {
                    link: '/settings',
                    icon: <Settings />,
                    text: 'Settings',
                },
            ],
        },
    ];

    return (
        <div
            className='flex flex-col w-[300px] w-min-[300px] border-r p-4
            gap-4 h-full overflow-y-auto fixed'>
            <div>
                <UserItem></UserItem>
            </div>
            <div className='grow h-full'>
                <Command  style={{ overflow: 'visible' }}>
                    {/* <CommandInput placeholder='Type a command or search...' /> */}
                    <CommandList style={{ overflow: 'visible' }} >
                        {menuList.map((menu: any, key: number) => (
                            <CommandGroup key={key} heading={menu.group} className='text-lg' >
                                {menu.items.map(
                                    (option: any, optionKey: number) => (
                                        <CommandItem key={optionKey} className='flex gap-3 text-[16px] p-2 items-center'>
                                            {option.icon}
                                            {option.text}
                                        </CommandItem>
                                    )
                                )}
                            </CommandGroup>
                        ))}
                    </CommandList>
                </Command>
            </div>
            <div className='mt-auto'>Settings / noti part</div>
        </div>
    );
};

export default Sidebar;
