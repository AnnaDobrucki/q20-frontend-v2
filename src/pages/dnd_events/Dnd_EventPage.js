import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import PopularProfiles from "../profiles/PopularProfiles";
import styles from "../../styles/DndEventsPage.module.css";
import AddEventButton from "../../components/AddEventButton";
import DNDEvent from "../dnd_events/Dnd_event";

function DndEventPage() {
  const { id } = useParams();
  const [dndEvent, setDNDEvents] = useState({results: [] });
  const currentUser = useCurrentUser();



  // Request info on DnD events via API
  useEffect(() => {
    const fetchDNDEvent = async () => {
      try {
        const [{ data: dndEvent }] = await Promise.all([
          axiosReq.get(`/dnd_events/${id}`),
        ]);
      
        setDNDEvents({results: [dndEvent]});
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
          <DNDEvent
        {...dndEvent.results[0]}
        setDndEvents={setDNDEvents} 
        dnd_eventPage
      />
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
