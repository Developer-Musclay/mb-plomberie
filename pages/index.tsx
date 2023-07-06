import Head from 'next/head'
import Image from 'next/image'
import { H2, H3, Title } from '../components/title'
import { ServiceCard } from '../components/serviceCard'
import Button from '@mui/material/Button'
import { EmojiEmotions } from '@mui/icons-material';
import { Container } from '@mui/material'
import utilStyles from '../styles/utils.module.css'
import { Services } from '../contents/services'

export default function Home() {
  return (
    <>
      <Head>
        <title>MB Plomberie</title>
        <meta name="description" content="MB Plomberie, services de plomberie professionnels" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/images/mb-logo.png" />
      </Head>

      <main>
        <div className={utilStyles.logoContainer}>
          <Image
            src="/images/mb-logo.png"
            alt="Next.js Logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <Container
          maxWidth="md"
          sx={{
            p: 6,
            textAlign: 'center',
          }} 
        >
          <Title>Services de plomberie professionnels sur le département 63</Title>
          <Button href='/contact' sx={{ m: 4 }} size="medium" variant="contained" endIcon={<EmojiEmotions />}>
            Contactez-moi !
          </Button>
        </Container>
        <div className={utilStyles.serviceCards}>
          {Services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title} 
              description={service.description} 
              image={service.image}
            />
          ))}
        </div>
        
        <Container 
          maxWidth="md"
          sx={{
            p: 6,
            pb: 10,
            textAlign: 'center',
          }} 
        >
          <H3>Quels que soient vos besoins en matière de plomberie, notre entreprise est là pour vous offrir des services de qualité supérieure. Faites-nous confiance pour tous vos projets de plomberie et de chauffage, nous nous engageons à vous satisfaire pleinement.</H3>
        </Container>
  
        <Container 
          maxWidth="md"
          sx={{
            backgroundColor: 'white',
            p: 6,
            textAlign: 'center',
          }} 
        >
          <Image
            priority
            src="/images/mb.png"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt="Mickaël Bonamy"
          />
          <H2>Mickaël Bonamy</H2>
          <H3>Plombier chauffagiste depuis 15 ans, je vous accompagne sur toutes les étapes de votre projet.</H3>
          <Button href='/contact' sx={{ m: 4 }} size="medium" variant="contained" endIcon={<EmojiEmotions />}>
            Contactez-moi !
          </Button>
        </Container>
        
        <div className={utilStyles.footer}>
          <p>Tel : 06 95 47 60 58</p>
          <p>Adresse : 21 rue Thevenot Thibaud, 63000 Clermont-Ferrand</p>
          <p>E-mail : mb.plomberie63000@gmail.com</p>
        </div>
      </main>
    </>
  )
}
