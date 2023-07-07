import { EmojiEmotions } from "@mui/icons-material"
import { Container, Button } from "@mui/material"
import { H1 } from "../ui/styledTitle"

export const Title = (): React.ReactElement => {
  return (
    <Container
      maxWidth="md"
      sx={{
        p: 6,
        textAlign: 'center',
      }} 
    >
      <H1>Services de plomberie professionnels sur le département 63</H1>
      <Button href='/contact' sx={{ m: 4 }} size="medium" variant="contained" endIcon={<EmojiEmotions />}>
        Contactez-moi !
      </Button>
    </Container>
  )
}