import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { H2, H3, Title } from '../components/title'
import { ServiceCard } from '../components/serviceCard'
import Button from '@mui/material/Button'
import { EmojiEmotions } from '@mui/icons-material';
import { Container } from '@mui/material'
import utilStyles from '../styles/utils.module.css'

const services = [
	{
		title: "Plomberie",
		description: "Notre équipe de plombiers qualifiés est prête à vous aider pour tous vos besoins en plomberie. Que ce soit pour des réparations, des installations ou des travaux de maintenance, nous avons l'expertise nécessaire pour résoudre tous vos problèmes de plomberie de manière efficace et professionnelle."
	},
	{
		title: "Chauffage",
		description: "En plus de nos services de plomberie, nous proposons également des solutions de chauffage complètes. Que vous ayez besoin d'une nouvelle installation de chauffage, d'une réparation de votre système existant ou d'un entretien régulier, notre équipe est là pour vous fournir des services de chauffage fiables et de qualité."
	},
	{
		title: "Dépannage",
		description: "Les problèmes de plomberie peuvent survenir à tout moment et nécessitent une intervention rapide. Notre service de dépannage est disponible 24h/24 et 7j/7 pour résoudre vos problèmes de plomberie urgents. Qu'il s'agisse d'une fuite d'eau, d'une canalisation bouchée ou de tout autre problème, vous pouvez compter sur nous pour vous fournir une assistance immédiate."
	},
	{
		title: "Installation",
		description: "Besoin d'une nouvelle installation de plomberie dans votre maison ou votre entreprise ? Nous sommes là pour vous aider. Nos plombiers expérimentés sont équipés pour effectuer des installations de haute qualité, que ce soit pour des équipements sanitaires, des systèmes de tuyauterie ou des appareils de plomberie spécialisés."
	},
	{
		title: "Salle de bain",
		description: "Si vous envisagez de rénover votre salle de bain, notre entreprise de plomberie est votre partenaire idéal. Nous pouvons vous aider à concevoir et à installer une salle de bain fonctionnelle et esthétique. De la plomberie aux installations sanitaires, nous nous assurerons que votre nouvelle salle de bain répond à tous vos besoins."
	},
]

export default function Home() {
  return (
    <>
      <Head>
        <title>MB Plomberie</title>
        <meta name="description" content="MB Plomberie, services de plomberie professionnels" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/images/mb-logo.png" />
      </Head>

      {/* presentation, logo */}
      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/mb-logo.png"
            alt="Next.js Logo"
            width={300}
            height={300}
            priority
          />
        </div>
        <Title>Services de plomberie professionnels sur le département 63</Title>
        <Button href='/contact' sx={{ m: 4 }} size="medium" variant="contained" endIcon={<EmojiEmotions />}>
          Contactez-moi !
        </Button>
          <div>
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title} 
                description={service.description} 
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
          
          <Container 
            maxWidth="md"
            sx={{
              backgroundColor: '#1BA39C',
              color: 'white',
              p: 2,
              px: 6,
              textAlign: 'center',
            }} 
          >
            <p>Tel : 06 95 47 60 58</p>
            <p>Adresse : 21 rue Thevenot Thibaud, 63000 Clermont-Ferrand</p>
            <p>E-mail : mb.plomberie63000@gmail.com</p>
          </Container>
      </main>
    </>
  )
}
