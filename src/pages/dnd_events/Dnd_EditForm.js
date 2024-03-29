import React, { useRef, useState, useEffect} from "react";
import { Form, Button, Row, Col, Container, Alert } from "react-bootstrap";
//import styles from "../../styles/DndEventsPage.module.css";
import { useHistory, useParams } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Image from "react-bootstrap/Image";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function DndEventEditForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    game_name: "",
    game_description: "",
    image: "",
    event_location: "",
    date: "",
    event_start: "",
    event_end: "",
    game_master : "",
    contact: "",
  });
  const { image } = formData;

  const history = useHistory();
  const imageInputRef = useRef(null);
  const {id} = useParams();

// Get-ing event data for pre populating and changing input fields
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/dnd_events/${id}/`);

        const { game_name, game_master, event_end, event_location,
             event_start, date, game_description, image, contact, is_owner} = data;

             is_owner ? setFormData({ game_name, game_master, event_end, event_location,
             event_start, date, game_description, image, contact }) : history.push("/");
      } catch (err) {
        //console.log(err);
      }
    };

    handleMount();
  }, [history, id]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 
const handleImageChange = (event) => {
  if (event.target.files.length) {
    setFormData({
      ...formData,
      image: URL.createObjectURL(event.target.files[0]),
    });
  }
};

  // Managing 'new' input via 'put'.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key of [
      'game_name',
      'game_description',
      'event_location',
      'date',
      'event_start',
      'event_end',
      'game_master',
      'contact',
      ]) {
      formDataToSend.append(key, formData[key]);
      }

      if (imageInputRef?.current?.files[0]) {
      formDataToSend.append("image", imageInputRef.current.files[0]);
      }
     try {
    await axiosReq.put(`/dnd_events/${id}/`, formDataToSend);
      history.push(`/dndevents/${id}`);
    } catch (err) {
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
            {errors?.game_name?.map((idx) => (
        <Alert variant="warning" key={idx}>
          {"Name it! Make it cool!"}
        </Alert>
      ))}
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
            {errors?.game_description?.map(( idx) => (
        <Alert variant="warning" key={idx}>
          {"Give people SOME idea what they're in for!"}
        </Alert>
      ))}
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
            {errors?.event_location?.map(( idx) => (
        <Alert variant="warning" key={idx}>
          {"It can be anywhere..."}
        </Alert>
      ))}
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
            {errors?.date?.map(( idx) => (
        <Alert variant="warning" key={idx}>
          {"Oop need a date mate!"}
        </Alert>
      ))}
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
            {errors?.event_start?.map(( idx) => (
        <Alert variant="warning" key={idx}>
          {"I think this might be key"}
        </Alert>
      ))}
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
            {errors?.event_end?.map(( idx) => (
        <Alert variant="warning" key={idx}>
          {"Wow this game never ends huh?"}
        </Alert>
      ))}
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
            {errors?.game_master?.map(( idx) => (
        <Alert variant="warning" key={idx}>
          {"So.. is anyone running this game or not?"}
        </Alert>
      ))}
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
            {errors?.contact?.map(( idx) => (
        <Alert variant="warning" key={idx}>
          {"Yo when we said email, we meant EMAIL!"}
        </Alert>
      ))}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={10} md={6}>
            <Form.Group>
            <figure>
                <Image className={appStyles.Image} src={image} rounded />
              </figure>
              <Form.Label>Iconic Image Here!</Form.Label>
              <Form.Control
                type="file"
                name="image"
                ref={imageInputRef}
                onChange={handleImageChange}
              />
            </Form.Group>
            {errors?.image?.map(( idx) => (
        <Alert variant="warning" key={idx}>
          {"Please give us an image!"}
        </Alert>
      ))}
          </Col>
        </Row>
        <Row className="mb-3 justify-content-end"> 
      <Col>
        <Button type="submit">Save Adventure!</Button>
      </Col>
      <Col>
        <Button
          className={`${btnStyles.ButtonGame} ${btnStyles.LightRed}`}
          onClick={() => history.goBack()}
        >
          Cancel Edit
        </Button>
      </Col>
    </Row>
      </Form>
    </Container>
  );
}

export default DndEventEditForm;
