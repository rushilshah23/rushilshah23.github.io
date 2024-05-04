import { Inter, Poppins, Roboto_Mono } from 'next/font/google'
 
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

const poppins = Poppins({
    subsets:['latin'],
    display:'swap',
    variable:'--font-poppins',
    weight:'400'})


export {
    inter,poppins, roboto_mono
}