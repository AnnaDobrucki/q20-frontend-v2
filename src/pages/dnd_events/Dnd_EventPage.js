import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import PopularProfiles from "../profiles/PopularProfiles";
import DNDEvent from "./Dnd_event";
import styles from "../../styles/DndEventsPage.module.css";
import AddEventButton from "../../components/AddEventButton";

function DndEventPage() {
  const { id } = useParams();
  const [dndEvent, setDNDEvent] = useState({});
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchDNDEvent = async () => {
      try {
        const { data: dndEvent } = await axiosReq.get(`/dnd_events/${id}`);
        setDNDEvent(dndEvent);
      } catch (err) {
        console.error("Error fetching DND event:", err);
      }
    };

    fetchDNDEvent();
  }, [id]);

  return (
    <Container className={`${styles.Event} pt-3`}>
      <Row>
        <Col>
          <PopularProfiles mobile />
          {currentUser && (
            <AddEventButton url="/dndevents/create" text="Create Event" mobile />
          )}
          {dndEvent && <DNDEvent {...dndEvent} dnd_eventPage/>}
        </Col>
        <Col>
          {currentUser && (
            <AddEventButton url="/dndevents/create" text="Add Event" />
          )}
          <PopularProfiles />
        </Col>
      </Row>
    </Container>
  );
}

export default DndEventPage;
