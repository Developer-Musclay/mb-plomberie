import { ServiceCard } from './serviceCard'
import { ServicesList } from '../../contents/servicesList'
import utilStyles from '../../styles/utils.module.css'

export const Services = (): React.ReactElement => {
  const { serviceCards } = utilStyles

  return (
    <div className={serviceCards}>
      {ServicesList.map((service, index) => (
        <ServiceCard 
          key={index}
          title={service.title} 
          description={service.description} 
          image={service.image}
        />
      ))}
    </div>
  )
}