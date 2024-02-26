import React, { useRef, useState } from "react";
import { Form, Button, Row, Col, Container, Image, Alert } from "react-bootstrap";
import UploadImage from "../../assets/placeholder.jpg";
import styles from "../../styles/DndEventsPage.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function DndEventCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
    location: "",
    date: "",
    startTime: "",
    endTime: "",
    organizer: "",
    contact: "",
  });

  const history = useHistory();
  const imageInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const { data } = await axiosReq.post("/dnd_events/", formDataToSend);
      history.push(`/events/${data.id}`);
    } catch (err) {
      console.log(err.response)
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>Name of Adventure!</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>What's your game like?</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>Start Time</Form.Label>
              <Form.Control
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>Game Master!?</Form.Label>
              <Form.Control
                type="text"
                name="organizer"
                value={formData.organizer}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>Contact Info</Form.Label>
              <Form.Control
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>Iconic Image Here!</Form.Label>
              <Form.Control
                type="file"
                name="image"
                ref={imageInputRef}
                onChange={handleImageChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit">Create Adventure!</Button>
      </Form>
    </Container>
  );
}

export default DndEventCreateForm;
