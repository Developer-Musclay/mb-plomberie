import Image from 'next/image'
import { EmojiEmotions } from "@mui/icons-material"
import { Container, Button } from "@mui/material"
import { H2, H3 } from "../ui/styledTitle"
import utilStyles from '../../styles/utils.module.css'

export const About = (): React.ReactElement => {
  const { borderCircle } = utilStyles

  return (
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
        className={borderCircle}
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
  )
}