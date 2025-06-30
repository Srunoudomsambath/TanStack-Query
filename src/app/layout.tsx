import type { Metadata } from "next";
// import {  Geist_Mono, Sevillana } from "next/font/google";
// import { Ubuntu_Mono} from "next/font/google";
import "./globals.css";
import QueryProvider from "./QueryProvider";
// import { spidermanFont } from "@/lib/font";
import localFont from "next/font/local";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

//   const sevillana = Sevillana({
//     variable: "--font-ubuntu",
//     subsets :["latin"],
//     weight : ['400'],

//   });
  //the error because of export you can remove export and it's okay
  const spidermanFont = localFont({
  src: '../../public/fonts/Spiderman.ttf', // starts with slash for `public/`
  variable: '--font-spiderman',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'My Cool App',
  description: 'This is a Next.js app with amazing features',
  keywords: ['Next.js', 'React', 'TanStack', 'App Router'],
  authors: [{ name: 'Your Name', url: 'https://your-portfolio.com' }],
  creator: 'Your Name',
  openGraph: {
    title: 'My Cool App',
    description: 'Best app ever built with Next.js',
    url: 'https://my-app.com',
    siteName: 'My Cool App',
    images: [
      {
        url: 'https://my-app.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'My App OpenGraph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Cool App',
    description: 'Check out this cool app built with Next.js!',
    creator: '@yourTwitterHandle',
    images: ['https://my-app.com/twitter-image.jpg'],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            className={`${spidermanFont.className} antialiased` } >
        <QueryProvider>
        {children}
        </QueryProvider>

      </body>
    </html>
  );
}
