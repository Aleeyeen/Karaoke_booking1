import Head from 'next/head'
import Layout from '../components/layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import authPrime from '../components/authPrime'
import useSWR, {mutate} from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

const URL = `http://localhost/api/bookingPrime`

const Prime = ( {token}) => {
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
        let _booking = await axios.put(`${URL}/${id}`, { booking })
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
    
            <div className='flex flex-wrap justify-evenly w-4/5 h-2/5 mt-10 overflow-auto'>
                {printBooking(data.list)}
            </div>
    
           {/* <div  className='flex flex-col fixed justify-start items-center h-screen w-screen'>
                <div className='flex flex-col justify-center items-center w-1/4 h-24 mt-16 rounded-t-xl 
                                bg-bluesea divide-y-2 divide-black '>
                    <span className='text-xl  font-bold uppercase tracking-wider pb-1 text-center'>Booking</span>
                    <span className='text-lg font-bold uppercase tracking-wide text-center pt-2'>Deluxe Room</span>
                </div>
                <div className='flex flex-col justify-start items-center w-1/4 bg-egg rounded-b-xl shadow-xl'>
                    <div className='flex flex-col justify-center items-start w-4/5 mt-8'>
                        <label className='-mt-2 font-semibold'>Name</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' placeholder='Name' 
                            onChange = {(e) => setname(e.target.value)}/>
                        <label className='-mt-2 font-semibold'>Surname</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' placeholder='Surname' 
                            onChange = {(e) => setsurname(e.target.value)}/>
                        <label className='mt-4 font-semibold'>Date</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400  rounded-md pl-2 focus:outline-none' type="date" placeholder='dd/mm/yyyy' 
                            onChange = {(e) => setdate(e.target.value)}/>
                        <label className='mt-4 font-semibold'>checkIn</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' type='time' placeholder='--:--' 
                            onChange = {(e) => setcheckin(e.target.value)}/>
                        <label className='mt-4 font-semibold'>checkOut</label>
                        <input className='w-full h-8 mt-2 border-2 border-gray-500 ring 
                            ring-gray-400 rounded-md pl-2 focus:outline-none' type='time' placeholder='--:--' 
                            onChange = {(e) => setcheckout(e.target.value)}/>
                    </div>
              <button className='w-28 h-10 ml-4 font-bold border-4 border-pink-800 focus:outline-none rounded-md hover:bg-palepink'
                  onClick={() => addBooking(name, surname, date, checkin, checkout)}>
                  Booking
              </button>
            </div>
            </div> */}
          </div>
        </Layout>
    )
}

export default authPrime(Prime)
export function getServerSideProps({ req, res }) {
    // console.log("token from cookie: ",cookie.get("token"))
    // console.log('req: ', req.headers)
    return { props: { token: req.cookies.token || "" } };
}