import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Menu({ token }) {

  return (
    <Layout>
      <Head>
        <title>Online Karaoke Booking</title>
      </Head>
      <div className = 'flex justify-center mt-4 text-md font-medium uppercase tracking-wider italic'>
        " Contact : Tel 095-1430950 "</div>
      <div className = 'flex justify-center mt-14 text-4xl font-bold uppercase tracking-wider'>
        Online Karaoke Booking</div>
      <div className = 'flex justify-center mt-4 text-md font-medium uppercase tracking-wider italic'>
        " Please select type karaoke room "</div>

      <div className='md:flex flex-row fixed justify-evenly items-start mt-36 h-screen w-screen'>  
      <Link href='/bookingDeluxe'>
          <a className='flex flex-col w-30 h-35 transition duration-700 
            ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <div className='-m-10'>
              <img src="/booking.svg"/>
            </div>
             <div className= 'text-xl font-bold text-center pt-16 tracking-wider leading-relaxed'>
              Deluxe Room
             </div>
          </a>
        </Link>
     
        <Link href='/bookingPrime'>
          <a className='flex flex-col w-30 h-35 transition duration-700 
            ease-in-out transform hover:-translate-y-1 hover:scale-110'>
            <div className='-m-10'>
              <img src="/booking.svg"/>
            </div>
             <div className= 'text-xl font-bold text-center pt-16 tracking-wider leading-relaxed'>
               Prime Room  
             </div>
          </a>
        </Link>
      </div>

    </Layout>
  )
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
