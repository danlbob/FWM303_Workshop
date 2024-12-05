'use client'

import React from 'react';
import './globals.css';
import '@aws-amplify/ui-react/styles.css'
import { Header, Footer } from '../components';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { ThemeProvider, Authenticator } from '@aws-amplify/ui-react';


Amplify.configure(outputs, {ssr: true});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        <Authenticator.Provider>
          <Header />
          {children}
          <Footer />
        </Authenticator.Provider>
      </ThemeProvider>
      </body>
    </html>
  )
}