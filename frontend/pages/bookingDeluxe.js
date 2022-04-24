import Head from 'next/head'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import authDeluxe from '../components/authDeluxe'
import useSWR, {mutate} from 'swr'
import Link from 'next/link'

const fetcher = url => axios.get(url).then(res => res.data)

const URL = `http://localhost/api/bookingDeluxe`

const Deluxe = ( {token}) => {
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

    const updateBooking = async (id) => {
        let _booking = await axios.put(`${URL}/${id}`, { name, surname,date, checkin, checkout })
        mutate(URL)
    }

    const deleteBooking = async (id) => {
        let _booking = await axios.delete(`${URL}/${id}`)
        mutate(URL)
      }

    const printBooking = (_booking) => {
        return (_booking.map((item, index) =>
        (
            <div key={index} className='flex flex-wrap w-1/4 h-1/2 m-5 mt-8' >
            <div className='w-full h-full pl-2 -mt-5 break-all overflow-auto rounded-lg'>
              <a className='font-semibold'>Booking: </a> {index+1} <br /> 
              <a className='font-semibold'>User : </a> {item.id} <br />
              <a className='font-semibold'>Name-Surname : </a> {item.name} { item.surname} <br />
              <a className='font-semibold'>Date : </a> {item.date} <br />
              <a className='font-semibold'>CheckIn : </a> {item.checkin} <br />
              <a className='font-semibold'>CheckOut :</a> {item.checkout}
            </div>
            <div className='flex justify-end w-full mt-2'>
              <button className='border-2 border-green-900 bg-green w-16 h-8 rounded-md hover:bg-babygreen focus:outline-none' onClick={() => updateBooking(item.id)}>Edit</button>
              <button className='border-2 border-red-900 bg-darkred w-16 h-8 ml-4 rounded-md hover:bg-babyred focus:outline-none' onClick={() => deleteBooking(item.id)}>Cancel</button>
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
            <div className=' border-double border-8 border-pink-800 p-4 rounded-lg bg-palepink'>
              <h1 className='text-3xl font-bold tracking-wider uppercase text-pink-800'>Deluxe Room</h1>
            </div>
            <div>
              <Link href='/formDeluxe'>
              <a className='text-2xl tracking-wider uppercase text-pink-800 rounded-xl focus:outline-none rounded-md hover:bg-palepink animate-pulse'>"Click here for booking"</a>
             </Link>
             </div>
            <div className='flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto'>
                {printBooking(data.list)}
            </div>
          </div>
        </Layout>
    )
}
export default authDeluxe(Deluxe)
export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}