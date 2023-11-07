import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/Header";
import Bottom from "@/components/Bottom";
import {ThemeProvider} from '@mui/material/styles';
import theme from '../components/Theme';


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
