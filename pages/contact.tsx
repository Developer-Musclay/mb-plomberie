import { Send } from "@mui/icons-material"
import { Box, FormControl, TextField, Button } from "@mui/material"
import styles from '../styles/Contact.module.css'
import Image from 'next/image'

const Contact = (): React.ReactElement => {
	const handleClick = () => {
    alert('Disponible sur la prochaine version !');
  }

	return (
		<>
			<div className={styles.logoContainer}>
				<Image
					src="/mb-logo.png"
					alt="MB Plomberie Logo"
					width={300}
					height={300}
					priority
				/>
			</div>
			<Box
				sx={{
					backgroundColor: 'white',
					p: 2,
					px: 6,
				}}
			>
				<h4 className={styles.contact}>Décrivez-nous votre besoin, nous vous répondrons dans les meilleurs délais !</h4>
				<FormControl sx={{ width: '100%' }}>
				<TextField 
					id="email" 
					label="Votre email" 
					variant="standard"
				/>
				<TextField
					id="message"
					label="Votre message"
					multiline
					variant="standard"
					margin="normal"
				/>
				<div className={styles.buttonContainer}>
					<Button onClick={handleClick} sx={{ mt: 5, width: '50%' }} size="small" variant="contained" endIcon={<Send />}>
						Envoyer
					</Button>
					<Button href="/" sx={{ marginTop: '1em' }}>Retour</Button>
				</div>
				</FormControl>
			</Box>
		</>
	)
}

export default Contact