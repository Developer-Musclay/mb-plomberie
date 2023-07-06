import { Card } from "./card"
import { Title } from "./title"
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export interface ServiceCardProps {
	title?: string
	description?: string
}

export const ServiceCard = ({ title, description }: ServiceCardProps): React.ReactElement => {
	return (
		<Card>
			<div className={utilStyles.imageCard}>
				<Image
					src="/images/plumber.png"
					alt="plumber"
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