import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '../section/Footer'
import Layout from '../section/Layout'



export default function Home() {
  return (
    <Layout pageMeta={{
      title: 'Zephyr Solution Website',
      description: 'Build customised software solution'
    }} >
    </Layout>
  )
}
