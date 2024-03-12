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
  const [dndEvent, setDNDEvent] = useState({results: [] });
  const currentUser = useCurrentUser();
  const [replies, setReplies] = useState({ results: [] });



  // Request info on DnD events via API
  useEffect(() => {
    const fetchDNDEvent = async () => {
      try {
        const [{ data: dndEvent }, { data: replies }] = await Promise.all([
          axiosReq.get(`/dnd_events/${id}`),
          axiosReq.get(`/replies/?dnd_events=${id}`),
        ]);
      
        setDNDEvent(dndEvent);
        setReplies(replies);
      } catch (err) {
        console.error("Error fetching DND event and replies:", err);
      }
    };

    fetchDNDEvent();
  },  [id]);

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
