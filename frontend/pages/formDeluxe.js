import Head from 'next/head'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useSWR, {mutate} from 'swr'


const fetcher = url => axios.get(url).then(res => res.data)

const URL = `http://localhost/api/bookingDeluxe`

export default function Deluxe ( {token}){
    // const [booking, setbooking] = useState([])
    const [name, setname] = useState('')
    const [surname, setsurname] = useState('')
    const [date, setdate] = useState('')
    const [checkin, setcheckin] = useState('')
    const [checkout, setcheckout] = useState('')

    const { data, error } = useSWR(URL, fetcher, { revalidateOnFocus: false })
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    console.log('Home: ', data)

    const addBooking = async (name, surname, date, checkin, checkout) => {
        let _booking = await axios.post(URL, {name, surname, date, checkin, checkout})
        mutate(URL)
    }

    return (
        <Layout>
          <Head>
            <title>Online Karaoke Booking</title>
          </Head>
    
           <div  className='flex flex-col fixed justify-start items-center h-screen w-screen'>
                <div className='flex flex-col justify-center items-center w-1/4 h-24 mt-16 rounded-t-xl 
                                bg-bluesea divide-y-2 divide-black '>
                    <span className='text-xl  font-bold uppercase tracking-wider pb-1 text-center'>Booking Deluxe Room</span>
                    {/* <span className='text-lg font-bold uppercase tracking-wide text-center pt-2'></span> */}
                </div>
                <div className='flex flex-col justify-start items-center w-1/4 bg-egg rounded-b-xl shadow-xl'>
                    <div className='flex flex-col justify-center items-start w-4/5 h-4/5 mt-6'>
                        <label className='mt-2 font-semibold'>Name</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' placeholder='Name' 
                            onChange = {(e) => setname(e.target.value)}/>
                        <label className='mt-2 font-semibold'>Surname</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' placeholder='Surname' 
                            onChange = {(e) => setsurname(e.target.value)}/>
                        <label className='mt-2 font-semibold'>Date</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400  rounded-md pl-2 focus:outline-none' type="date" placeholder='dd/mm/yyyy' 
                            onChange = {(e) => setdate(e.target.value)}/>
                        <label className='mt-2 font-semibold'>checkIn</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' type='time' placeholder='--:--' 
                            onChange = {(e) => setcheckin(e.target.value)}/>
                        <label className='mt-2 font-semibold'>checkOut</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' type='time' placeholder='--:--' 
                            onChange = {(e) => setcheckout(e.target.value)}/>
                    </div>
              <button className='w-28 h-10 mt-3 ml-4 font-bold border-4 border-pink-800 focus:outline-none rounded-md hover:bg-palepink'
                  onClick={() => addBooking(name, surname, date, checkin, checkout)} >
                  Booking
              </button>
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