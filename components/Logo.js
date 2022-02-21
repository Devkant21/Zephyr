import Link from 'next/Link'
import { TerminalIcon } from '@heroicons/react/outline'

const Logo = () => {
    <Link href="/">
        <a className='flex items-center space-x-1 text-blue-500'>
            <TerminalIcon className='w-8 h-8 flex-shrink-0' />
            <span className='font-bold text-lg tracking-tight whitespace-nowrap'>
                Zephyr Solution
            </span>     
        </a>
    </Link>
};

export default Logo