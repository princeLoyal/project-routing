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
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading ...</p>}>
    <Await resolve={events}>
    {   (loadedEvent) => <EventsList events={loadedEvent}/> }
    </Await>
    </Suspense>
  );
};

export default EventsPage;

async function loadEvents () {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw json(
      {message:' Could not fetch events'}, 
      { status: 500});
  } else {
     const resData = await response.json();
     return resData.events;
  };
};

export function loader (){
 return defer({
    events: loadEvents(),
  });
 };