import { Fragment } from 'react';
// import { useRouter } from 'next/router';

import Comments from 'components/input/comments';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage(props) {
  // const router = useRouter();
  // const { eventId } = router.query;
  // const event = getEventById(eventId);
  const event = props.selectedEvent;
  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const { eventId } = ctx.params;

  const event = await getEventById(eventId);
  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
};

// export const getStaticPaths = async () => ({
//   const events = await getAllEvents(),
//   const paths = events.map(event => ({ params: { eventId: event.id } })),
//   return {

//   paths: [
//     {
//       // params: { eventId: 'e1' },
//       params: paths,
//     },
//   ],
//   fallback: false,
//   },
// });
// ;
// export default EventDetailPage;
export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));
  return {
    paths,
    fallback: true,
  };
}
export default EventDetailPage;
