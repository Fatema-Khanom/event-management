
import React, { useState, useEffect } from 'react';
import DetailsPage from '../DetailsPage';


const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);
    const [noFound, setNofound] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const myEventsData = JSON.parse(localStorage.getItem("myEvents"));

        if (myEventsData) {
            setMyEvents(myEventsData);

            const total = myEventsData.reduce((preValue, currentItem) => preValue + parseFloat(currentItem.price), 0);

            setTotalPrice(total);
        } else {
            setNofound("No Data Found");
        }
    }, []);

    const handleRemove = () => {
        localStorage.clear();
        setMyEvents([]);
        setNofound("No Data Found");
    };

    return (
        <div>
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    {myEvents.length > 0 && (
                        <div>
                            <button onClick={handleRemove} className="px-5 bg-green-200 block mx-auto">
                                Delete All Events
                            </button>
                            
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        {isShow
                            ? myEvents.map((event) => (
                                  <DetailsPage key={event.id} card={event} />
                              ))
                            : myEvents.slice(0, 2).map((event) => (
                                  <DetailsPage key={event.id} card={event} />
                              ))}
                    </div>

                    {myEvents.length > 2 && (
                        <button onClick={() => setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto">
                            {isShow ? "See less" : "See more"}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default MyEvents;
