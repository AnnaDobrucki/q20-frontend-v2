import { render, screen,  } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DNDEvent from '../../pages/dnd_events/Dnd_event';

// mocking for test
const mockProps = {
  id: '1',
  owner: 'JohnDoe',
  game_name: 'Dungeons & Dragons',
  game_description: 'Join us for an epic adventure!',
  event_start: '18:00',
};

//checking rendering via mock props
describe('DNDEvent component', () => {
  test('renders event details properly', () => {
    render(
      <Router>
        <DNDEvent {...mockProps} />
      </Router>
    );

    expect(screen.getByText('JohnDoe')).toBeInTheDocument();
    expect(screen.getByText('Dungeons & Dragons')).toBeInTheDocument();
    expect(screen.getByText('Join us for an epic adventure!')).toBeInTheDocument();
    expect(screen.getByText('Start: 18:00')).toBeInTheDocument();
  }) })


