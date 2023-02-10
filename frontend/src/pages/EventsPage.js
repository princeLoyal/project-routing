import { useLoaderData, json, defer, Await} from 'react-router-dom';
import { Suspense } from 'react';
import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  // if(data.isError){
  //   return <p>{data.message}</p>
  // }
  // const events = data.events;
  
  return (
    <Suspense>
    <Await resolve={events}>
    {   (loadedEvent) => <EventsList events={loadedEvent}/> }
    </Await>
    </Suspense>
  );
};

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    throw json({message:' Could not fetch events'}), 
    { status: 500}
  } else {
   return response;
  };
};

export function loader (){
  defer({
    events: loadEvents(),
  });
 };