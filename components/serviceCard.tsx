import { Card } from "./card"
import { Title } from "./title"
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export interface ServiceCardProps {
	title?: string
	description?: string
	image?: {
		src: string
		alt: string
	}
}

export const ServiceCard = ({ title, description, image }: ServiceCardProps): React.ReactElement => {
	const { src, alt } = image
	
	return (
		<Card>
			<div className={utilStyles.imageCard}>
				<Image
					src={src}
					alt={alt}
					width={250}
					height={250}
					priority
				/>
			</div>
			<Title>{title}</Title>
			<p>{description}</p>
		</Card>
	)
}