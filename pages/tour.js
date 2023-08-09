import { gql, useQuery } from "@apollo/client";
import TourDateCard from "../components/TourDateCard";

const GET_TOUR_DATES = gql`
  query AllTourDates {
    tourDates {
      nodes {
        databaseId
        tourDateFields {
          city
          date
          openingAct
          stadium
          ticketLink
        }
      }
    }
  }
`;

export default function TourDates() {
  const { loading, error, data } = useQuery(GET_TOUR_DATES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h2>TAYLOR SWIFT | THE ERAS TOUR</h2>
      <h2 className="main-title">U.S. DATES</h2>
      <ul>
        {data.tourDates.nodes.map((tourDate) => (
          <li key={tourDate.databaseId}>
            <TourDateCard tourDate={tourDate.tourDateFields} />
          </li>
        ))}
      </ul>
    </>
  );
}
