'use client';
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from 'lucide-react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '@/components/ui/command';
import { useState, useRef, useEffect } from 'react';

export function CommandDemo() {
    const [inputValue, setInputValue] = useState('');
    const [showList, setShowList] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputValue = (value: string) => {
        setInputValue(value);
        setShowList(value.length > 0);
    }

    useEffect(() => {
        const handleClickOutside = (event:any) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setShowList(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <Command className={`rounded-lg border ${showList ? 'shadow-lg' :''} `}>
            <CommandInput 
                ref={inputRef}
                placeholder='Type a command or search...'
                value={inputValue}
                onValueChange={handleInputValue}
                onFocus={() => setShowList(true)}
            />
            {showList && (
                <CommandList style={{ display: showList ? 'block' : 'none'}}>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading='Suggestions'>
                        <CommandItem>
                            <Calendar className='mr-2 h-4 w-4' />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile className='mr-2 h-4 w-4' />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem disabled>
                            <Calculator className='mr-2 h-4 w-4' />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading='Settings'>
                        <CommandItem>
                            <User className='mr-2 h-4 w-4' />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard className='mr-2 h-4 w-4' />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings className='mr-2 h-4 w-4' />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            )}
        </Command>
    );
}