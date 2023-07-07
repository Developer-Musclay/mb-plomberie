import { Send } from "@mui/icons-material"
import { Box, FormControl, TextField, Button } from "@mui/material"
import utilStyles from '../styles/utils.module.css'
import Layout from "../components/containers/layout"

const Contact = (): React.ReactElement => {
	const { lightText, buttonContainer } = utilStyles

	const handleClick = () => {
    alert('Disponible sur la prochaine version !');
  }

	return (
		<Layout>
			<Box
				sx={{
					backgroundColor: 'white',
					p: 2,
					px: 6,
				}}
			>
				<h4 className={lightText}>Décrivez-nous votre besoin, nous vous répondrons dans les meilleurs délais !</h4>
				<FormControl sx={{ width: '100%' }}>
				<TextField 
					id="email-input" 
					label="Votre email" 
					variant="standard"
				/>
				<TextField
					id="message-input"
					label="Votre message"
					multiline
					variant="standard"
					margin="normal"
				/>
				<div className={buttonContainer}>
					<Button onClick={handleClick} sx={{ mt: 5, width: '50%' }} size="small" variant="contained" endIcon={<Send />}>
						Envoyer
					</Button>
					<Button href="/" sx={{ marginTop: '1em' }}>Retour</Button>
				</div>
				</FormControl>
			</Box>
		</Layout>
	)
}

export default Contact