import Head from 'next/head'
import Layout from '../components/layout'
import axios from 'axios'
import Link from 'next/link'
import useSWR, {mutate} from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

const URL = `http://localhost/api/bookingPrime`

export default function Prime ( {token}){
    const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false })
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log('Home: ', data)

    const printBooking = (_booking) => {
        return (_booking.map((item, index) =>
        (
            <div key={index} className='flex flex-wrap w-1/4 h-1/2 m-5 mt-8 ' >
            <div className='w-full h-full pl-2 -mt-5 break-all overflow-auto rounded-lg  border-2 border-red-600 rounded-xl'>
              <a className='font-semibold'>Booking: </a> {index+1} <br /> 
              <a className='font-semibold'>User : </a> {item.id} <br />
              <a className='font-semibold'>Date : </a> {item.date} <br />
              <a className='font-semibold'>CheckIn : </a> {item.checkin} <br />
              <a className='font-semibold'>CheckOut :</a> {item.checkout}
            </div>
          </div>
        )
        ))
    }
    return (
        <Layout>
          <Head>
            <title>Online Karaoke Booking</title>
          </Head>
    
          <div className='md:flex flex-col fixed justify-start items-center h-screen w-screen mt-10'>
            <Link href='/formPrime'>
                <a className='text-2xl tracking-wider uppercase text-pink-800 rounded-xl focus:outline-none rounded-md hover:bg-palepink animate-pulse'>
                        "Prime Booking click here"
                </a>
            </Link>
            <div className='flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto'>
                {printBooking(data.list)}
            </div>
          </div>
        </Layout>
    )
}

export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}