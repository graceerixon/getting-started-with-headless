import Link from "next/link";

export default function TourDateCard({ tourDate }) {
  return (
    <div className="event">
      <h3 className="event-date">{tourDate.date}</h3>
      <h2 className="event-venue">{tourDate.stadium}</h2>
      <h3 className="event-city">{tourDate.city}</h3>
      <p className="supporting-acts">with {tourDate.openingAct}</p>
      <Link className="event-tickets" href={tourDate.ticketLink}>
        <h3>MORE INFO</h3>
      </Link>
    </div>
  );
}
