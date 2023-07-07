import Layout from '../components/containers/layout'
import { About } from '../components/containers/about';
import { Services } from '../components/containers/services';
import { Content } from '../components/containers/content';
import { Title } from '../components/containers/title';

export default function Home() {
  return (
    <Layout>
      <Title />
      <Services />
      <Content />
      <About />
    </Layout>
  )
}
