import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectedCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail'

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = selectedCampsiteById(campsiteId)

  return (
    <Container>
        <Row>
            <CampsiteDetail campsite={campsite} />
        </Row>
    </Container>
  )
}

export default CampsiteDetailPage;
