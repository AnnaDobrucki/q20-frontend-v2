import React from "react";
import styles from "../../styles/DndEvent.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Media,
  OverlayTrigger,
  Tooltip,
  Row,
  Col,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

const DNDEvent = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    reply_id,
    replies_count,
    game_name,
    game_description,
    image,
    date,
    start_time,
    end_time,
    location,
    updated_at,
    game_master,
    email,
    phone,
    address,
    eventPage,
    setEvents,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/dnd_events/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/dnd_events/${id}/`);
      history.goBack();
    } catch (err) {
      // Handle error
    }
  };

  const handleReply = async () => {
    try {
      const { data } = await axiosRes.post("/replies/", { event: id });
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                replies_count: event.replies_count + 1,
                reply_id: data.id,
              }
            : event;
        }),
      }));
    } catch (err) {
      // Handle error
    }
  };

  const handleUnreply = async () => {
    try {
      await axiosRes.delete(`/replies/${reply_id}/`);
      setEvents((prevEvents) => ({
        ...prevEvents,
        results: prevEvents.results.map((event) => {
          return event.id === id
            ? {
                ...event,
                replies_count: event.replies_count - 1,
                reply_id: null,
              }
            : event;
        }),
      }));
    } catch (err) {
      // Handle error
    }
  };

  return (
    <Card className={styles.Event}>
      <Card.Body >
        <Media className="align-items-center justify-content-between">
          <div>
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
            </Link>
            <span>{owner}</span>
          </div>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && eventPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Card.Img src={image} alt={game_name} />
      <Card.Body >
        <Link to={`/dnd_events/${id}`}>
          <Card.Title className={`text-center ${styles.Heading}`}>
            {game_name}
          </Card.Title>
        </Link>
        {game_description && <Card.Text>{game_description}</Card.Text>}
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card.Header className={styles.ListHeader}>
              Event Details
            </Card.Header>
            <ListGroup className="justify-content-md-center">
              {date && (
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <i
                    className={`${styles.EventIcons} fa-solid fa-calendar-day`}
                    aria-hidden="true"
                  ></i>
                  {date}
                </ListGroupItem>
              )}
              {start_time && (
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <i
                    className={`${styles.EventIcons} fa-solid fa-clock`}
                    aria-hidden="true"
                  ></i>{" "}
                  Start: {start_time}
                </ListGroupItem>
              )}
              {end_time && (
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <i
                    className={`${styles.EventIcons} fa-regular fa-clock`}
                    aria-hidden="true"
                  ></i>{" "}
                  End: {end_time}
                </ListGroupItem>
              )}
              {location && (
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <i
                    className={`${styles.EventIcons} fa-solid fa-map-location-dot`}
                    aria-hidden="true"
                  ></i>{" "}
                  {location}
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
          <Col>
            <Card.Header className={styles.ListHeader}>
              Game Details
            </Card.Header>
            <ListGroup className="justify-content-md-center">
              {game_master && (
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <i
                    className={`${styles.EventIcons} fa-solid fa-chalkboard-user`}
                    aria-hidden="true"
                  ></i>
                  {game_master}
                </ListGroupItem>
              )}
              {email && (
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <i
                    className={`${styles.EventIcons} fa-solid fa-envelope`}
                    aria-hidden="true"
                  ></i>{" "}
                  {email}
                </ListGroupItem>
              )}
              {phone && (
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <i
                    className={`${styles.EventIcons} fa-solid fa-phone`}
                    aria-hidden="true"
                  ></i>{" "}
                  {phone}
                </ListGroupItem>
              )}
              {address && (
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  <i
                    className={`${styles.EventIcons} fa-solid fa-map-location-dot`}
                    aria-hidden="true"
                  ></i>{" "}
                  {address}
                </ListGroupItem>
              )}
            </ListGroup>
          </Col>
        </Row>
        <div className={styles.EventBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't attend your own event!</Tooltip>}
            >
              <i
                className={`fa-solid fa-calendar-check ${styles.ReplyImpossible}`}
              />
            </OverlayTrigger>
          ) : reply_id ? (
            <span onClick={handleUnreply}>
              <i className={`fa-solid fa-calendar-check ${styles.Replied}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleReply}>
              <i className={`fa-solid fa-calendar-check ${styles.UnReplied}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to attend events!</Tooltip>}
            >
              <i
                className={`fa-solid fa-calendar-check ${styles.ReplyImpossible}`}
              />
            </OverlayTrigger>
          )}
          {replies_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default DNDEvent;
