import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ProfileUser = ({ dataProfile }) => {
  return (
    <Container fluid className='mb-3'>
      <Row className='g-5'>
        <Col sm={12} lg={6}>
          <img className='w-100' src={dataProfile.profile_IMG.url} alt={dataProfile.description} />
        </Col>
        <Col sm={12} lg={6}>
          <div>
            <p> {dataProfile.profileDescription}</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProfileUser
