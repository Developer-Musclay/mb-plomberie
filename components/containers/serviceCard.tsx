import { Card } from "../ui/styledSection"
import { H1 } from "../ui/styledTitle"
import Image from 'next/image'
import utilStyles from '../../styles/utils.module.css'

export interface ServiceCardProps {
	title?: string
	description?: string
	image?: {
		src: string
		alt: string
	}
}

export const ServiceCard = ({ title, description, image }: ServiceCardProps): React.ReactElement => {
	const { imageCard } = utilStyles
	const { src, alt } = image
	
	return (
		<Card>
			<div className={imageCard}>
				<Image
					src={src}
					alt={alt}
					width={250}
					height={250}
					priority
				/>
			</div>
			<H1>{title}</H1>
			<p>{description}</p>
		</Card>
	)
}