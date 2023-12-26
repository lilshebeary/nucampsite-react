import { Container, Row, Col, Button } from 'reactstrap';
import CampsiteDetail from '../features/capmpsites/CampsiteDetail';
import CampsitesList from '../features/capmpsites/CampsitesList';
import { selectRandomCampsite } from '../features/capmpsites/campsitesSlice';

const CampsiteDirectoryPage = () => {
    const selectedCampsite = selectRandomCampsite();
  return (
    <Container>
      <Row>
        <Col sm='5' md='7'>
            <CampsiteList />
        </Col>
        <Col sm='7' md='5'>
            <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  )
}

export default CampsiteDirectoryPage


