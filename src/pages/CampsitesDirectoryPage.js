import { Container, Row } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsiteDirectoryPage = () => {
  
  return (
    <Container>
       <SubHeader current='Directory' />
      <Row>
        <CampsitesList />
      </Row>
    </Container>
  )
}

export default CampsiteDirectoryPage


