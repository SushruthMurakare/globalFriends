import React from "react";
import useEvents from "../hooks/useEvents";

export default function CalendarOfEvents() {
  const { events, loading } = useEvents();
  const hasEvents = !loading && events.length > 0;

  return (
    <section className="calendar-section">
      <div className={`calendar-inner${hasEvents ? " calendar-inner--loaded" : ""}`}>
        <span className="section-label">Calendar of Events</span>

        {hasEvents ? (
          <>
            <h2 className="calendar-headline">Upcoming Events</h2>
            <div className="event-list">
              {events.map((e, i) => (
                <div className="event-card" key={i}>
                  <div className="event-card__date">
                    <span className="event-card__date-main">{e.date}</span>
                    {e.time && <span className="event-card__time">{e.time}</span>}
                  </div>
                  <div className="event-card__body">
                    <h3 className="event-card__title">{e.event}</h3>
                    {e.location && (
                      <p className="event-card__location">{e.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          !loading && (
            <>
              <h2 className="calendar-headline">Something Exciting Is Coming</h2>
              <span className="calendar-badge">Coming Soon</span>
              <p className="calendar-text">
                We're building an easy way to see every hike, meal, and gathering
                at a glance. Check back soon for our full calendar of events!
              </p>
            </>
          )
        )}
      </div>
    </section>
  );
}
