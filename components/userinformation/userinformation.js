import styles from './userinformation.module.css'

import { Button, Col, Container, Row, } from 'react-bootstrap';
import Avatar from '../avatar/avatar';
const InformationUser = ({ }) => {
  return (
    <Container>

      <Row>
        <Col sm={12} md={8}>
          <h1 className={styles.h1_name}>Johann Holzmann</h1>
          <h4>Estudiante de Ingeniería en Computación en la Universidad Nacional del Sur</h4>
        </Col>
        <Col sm={12} md={4}>
          <Avatar />
        </Col>
      </Row>
    </Container>
  );
}

export default InformationUser;