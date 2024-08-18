import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
    const pageName = 'HomePage';
    return (
        <main className=''>
            <span className='font-bold text-4xl'>{pageName}</span>
            <div className='border-dashed border border-zinc-500 w-full h-12 rounded-lg'>
                Hello
            </div>
            <div className='border-dashed border border-zinc-500 w-full h-64 rounded-lg'>
                <Button variant={'default'}>Click me</Button>
            </div>
        </main>
    );
}
