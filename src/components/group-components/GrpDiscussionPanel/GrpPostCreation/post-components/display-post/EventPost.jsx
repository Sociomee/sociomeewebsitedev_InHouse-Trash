import React from 'react'

const EventPost = ({ event }) => {
    return (
        <>
            <div className="event-display-block">
                <div className="event-cont-top-blk">
                    <p>{event.eventDescription}</p>
                </div>
                <div className="event-imgdis-blk">
                    <img src={event.eventCoverImageURL} />

                </div>
                <div className="event-main-homecont-blk">
                    {/* <h3>Get started with live music near you</h3> */}
                    <h5>{event.eventCategory}</h5>
                    <div className="event-date-time-home-blk">
                        <span>
                        {`${new Date(event.eventStartTime).toDateString()}`} to {`${new Date(event.eventEndTime).toDateString()}`}
                        </span>
                        <span>
                        {`${new Date(event.eventStartTime).toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, "$1")}`} to {`${new Date(event.eventEndTime).toTimeString().replace(/.*(\d{2}:\d{2}):\d{2}.*/, "$1")}`}
                        </span>
                    </div>
                    <div className="event-home-locblk">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {event.eventAddress}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventPost
