import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import {ThemeProvider} from '@mui/material/styles';
import theme from '../components/Theme';
import Head from "next/head";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Biroul de credit Infodebit',
  description: 'Biroul de credit Infodebit',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <Head>
          <link rel="preload" href="public/topImg.webp" as="image" />
          <link rel="preload" href="components/TopImage.module.scss" as="style"/>
          <link rel="preload" href="app/contacts/Contacts.module.scss" as="style"/>
      </Head>
      <body className={inter.className}>
      <ThemeProvider theme={theme}>
              <Header/>
              {children}
        <Bottom/>
      </ThemeProvider>
      </body>
    </html>
  )
}
