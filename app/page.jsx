//'use client'
import Image from "next/image";
import axios from 'axios'
import { Form, Info } from '@/app/Components'

export default async function Home() {

  const URL = 'https://api.thecatapi.com/v1/images/search' // live_dmHywcd4G3gkdKmcsibddCW6HvZfZDGVLqyXHq9Q1irwBHYh9tCwIt6aCQGVamGA
  const catPics = await axios.get(URL)
  console.log(catPics.data)
  return <div >Hello</div>
}
