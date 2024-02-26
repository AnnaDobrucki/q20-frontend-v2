import React, { useState, useEffect } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import DNDEvent from "./Dnd_event";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import styles from "../../styles/DndEventsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/not_found.png";
import PopularProfiles from "../profiles/PopularProfiles";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import AddEventButton from "../../components/AddEventButton";

function DndEventsPage({ message }) {
  const [dndEvents, setDndEvents] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchDndEvents = async () => {
      try {
        const { data } = await axiosReq.get(`/dnd_events/?search=${query}`);
        setDndEvents(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
  
    setHasLoaded(false);
  
    const timer = setTimeout(() => {
      fetchDndEvents();
    }, 1000);
  
    return () => {
      clearTimeout(timer);
    };
  }, [query, pathname, currentUser]);

  return (
    <Row>
      <Col>
        <PopularProfiles mobile />
        {currentUser && (
          <AddEventButton url="/dndevents/create" text="Create Event" mobile />
        )}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            placeholder="Search DnD Events"
          />
        </Form>
        {hasLoaded ? (
          <>
            {dndEvents.results.length ? (
              <InfiniteScroll
                dataLength={dndEvents.results.length}
                loader={<Asset spinner />}
                hasMore={!!dndEvents.next}
                next={() => fetchMoreData(dndEvents, setDndEvents)}
              >
                {dndEvents.results.map((dndEvent) => (
                  <DNDEvent key={dndEvent.id} {...dndEvent} setDndEvents={setDndEvents} />
                ))}
              </InfiniteScroll>
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col>
        {currentUser && (
          <AddEventButton url="/dndevents/create" text="Create Event" />
        )}
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default DndEventsPage;