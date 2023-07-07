import Head from "next/head";
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'

export default function Layout({
  children 
}: { children: React.ReactNode }) {
  const { logoContainer, footer } = utilStyles
  return (
    <div>
      <Head>
        <title>MB Plomberie</title>
        <meta name="description" content="MB Plomberie, services de plomberie professionnels" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/images/mb-logo.png" />
      </Head>
      <header>
        <div className={logoContainer}>
          <Image
            src="/images/mb-logo.png"
            alt="MB Plomberie Logo"
            width={300}
            height={300}
            priority
          />
        </div>
      </header>
      <main>{children}</main>
      <div className={footer}>
        <p>Tel : 06 95 47 60 58</p>
        <p>Adresse : 21 rue Thevenot Thibaud, 63000 Clermont-Ferrand</p>
        <p>E-mail : mb.plomberie63000@gmail.com</p>
      </div>
    </div>
  );
}