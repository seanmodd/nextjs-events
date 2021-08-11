import { getAllEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  const { events } = props;
  return (
    <div>
      <EventList items={props.events} />
    </div>
  );
}
export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};
export default HomePage;
