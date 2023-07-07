import { Container } from "@mui/material"
import { H3 } from "../ui/styledTitle"

export const Content = (): React.ReactElement => {
  return (
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
  )
}