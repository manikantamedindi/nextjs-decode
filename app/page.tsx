import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { title } from "process";

const events = [
  {
    image: "/images/event1.png",
    title: "Event 1"
  },
  {
    image: "/images/event2.png",
    title: "Event 2"
  }
]

export default function Home() {
  return (
    <section>
      <h1 className="text-center">The Hub For Every Dev</h1>
      <p className="text-center mt-5">hackerthons, Meetups and conference in one places</p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events list-none">
          {
            events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}
