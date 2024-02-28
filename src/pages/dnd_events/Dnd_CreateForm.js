import React, { useRef, useState } from "react";
import { Form, Button, Row, Col, Container, Image, Alert } from "react-bootstrap";
import UploadImage from "../../assets/placeholder.jpg";
import styles from "../../styles/DndEventsPage.module.css";
import { useHistory } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function DndEventCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    game_name: "",
    game_description: "",
    image: null,
    event_location: "",
    date: "",
    event_start: "",
    event_end: "",
    game_master : "",
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
      history.push(`/dndevents/${data.id}`);
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
                name="game_name"
                value={formData.game_name}
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
                name="game_description"
                value={formData.game_description}
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
                name="event_location"
                value={formData.event_location}
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
                name="event_start"
                value={formData.event_start}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col xs={10} md={6}>
            <Form.Group>
              <Form.Label>End Time</Form.Label>
              <Form.Control
                type="time"
                name="event_end"
                value={formData.event_end}
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
                name="game_master"
                value={formData.game_master}
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
        <Row className="mb-3 justify-content-end"> 
      <Col>
        <Button type="submit">Create Adventure!</Button>
      </Col>
      <Col>
        <Button
          className={`${btnStyles.ButtonGame} ${btnStyles.LightRed}`}
          onClick={() => history.goBack()}
        >
          Cancel Greatness
        </Button>
      </Col>
    </Row>
      </Form>
    </Container>
  );
}

export default DndEventCreateForm;
