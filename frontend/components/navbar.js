import Link from 'next/link'
const Navbar = () => (
    <nav className='flex items-center bg-gradient-to-r from-pink-500 to-gray-600 p-4 shadow-xl'>
        <Link href='/'>
            <a className='flex flex-col items-center divide-y-2 divide-white ml-4'>
                <span className='text-xl text-white font-bold uppercase tracking-wide pb-1 text-center'>
                    Online Karaoke Booking
                </span>
                <span className='text-sm text-white font-bold uppercase tracking-wide text-center pt-2'>
                    KARAOKE 24 HOURS
                </span>
            </a>
        </Link>
        <div className='hidden w-full lg:inline-flex lg:flex-grow lg:w-auto'>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto'>
                <Link href='/'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-4 rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        FOR STAFF
                     </a>
                </Link>
                <Link href='/menu'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-4 rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        BOOKING
                    </a>
                </Link>
                <Link href='/logout'>
                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-4 rounded text-white font-bold items-center justify-center hover:bg-blue hover:text-white'>
                        LOG OUT
                    </a>
                </Link>
            </div>
        </div>
    </nav>
)

export default Navbar