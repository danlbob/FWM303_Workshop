'use client'

import React from 'react';
import './globals.css';
import '@aws-amplify/ui-react/styles.css'
import { Header, Footer } from '../components';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}