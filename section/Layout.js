import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Layout = ({ children, pageMeta }) => {
    const router = useRouter();
    const meta = {
        title: 'Zephyr Solution',
        description: 'IT solution company based in Guwahati, Assam, provides customised web apps, software solution',
        type:'website',
        ... pageMeta,
    };
    return (
        <>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <link rel="icon" href="/favicon.ico" />
                {/* Open Graph */}
                <meta
                    property="og:url"
                    content={'http://localhost:3000${router.asPath}'}
                />
                <meta property='og:type' content={meta.type}/>
                <meta property='og:site_name' content="Zephyr Solution Website"/>
                <meta property='og:description' content={meta.description}/>
                <meta property='og:title' content={meta.title}/>
                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <div className='min-h-screen flex flex-col'>
                <Header />
                <main className='flex-grow container mx-auto px-4 sm:px-6'>
                    {children}
                </main>
                <Footer />
            </div>

        </>
    )
}
export default Layout