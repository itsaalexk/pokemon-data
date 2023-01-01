import Head from 'next/head';
import { FunctionComponent, ReactNode } from 'react';
import { Navbar } from './ui/Navbar';



type Props = {children : ReactNode, title : string }

export const Layout:FunctionComponent<Props> = ({children , title ="Pokemon App"}) => {
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="author" content='Alex Kononenko' />
      <meta name="description" content={`Informacion del ${title}`} />
      <meta name="keywords" content={`nombre ${title}`} />
    </Head>
    <Navbar></Navbar>
    <main>
      {children}
    </main>
    
    
    </>
  )
}
