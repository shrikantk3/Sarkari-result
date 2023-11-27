import Image from 'next/image'
import styles from './page.module.css'
import Auth from './auth/auth';

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function Home() {
  let isLogin = false;
  return (
    <main className={styles.main}>
      <PrimeReactProvider>
        <Auth isLogin={isLogin}></Auth>  
      </PrimeReactProvider>   
    </main>
  )
}
