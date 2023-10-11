// import React from 'react';


// const DetailsPage = () => {
//     const { id, name,price, image,description,buttonText,details,bookButton } =  || {};
    
//     return (
        
//             <div className="flex justify-center p-16">
//               <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md">
//                 <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
//                     <img
//                     src={image}
//                     alt="image"
//                     class="h-full w-full object-cover"
//                     />
//                 </div>
//                 <div class="p-6">
//                     <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
//                     startups
//                     </h6>
//                     <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
//                     Lyft launching cross-platform service this week
//                     </h4>
//                     <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
//                     Like so many organizations these days, Autodesk is a company in
//                     transition. It was until recently a traditional boxed software company
//                     selling licenses. Yet its own business model disruption is only part of
//                     the story
//                     </p>
//                     <a class="inline-block" href="#">
//                     <button
//                         class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                         type="button"
//                     >
//                         Learn More
//                         <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke-width="2"
//                         stroke="currentColor"
//                         aria-hidden="true"
//                         class="h-4 w-4"
//                         >
//                         <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//                         ></path>
//                         </svg>
//                     </button>
//                     </a>
//                 </div>
//                 </div>
//         </div>
//     );
// };

// export default DetailsPage;

// import React from 'react';
// import swal from 'sweetalert';

// const DetailsPage = ({ card }) => {
//     const handleAddToMyEvents = () => {
        
//     const { id, name, price, image, description, buttonText, shortDetails, bookButton , seemore} = card || {};
//     const addedMyEventsArray = [];

//         const myEventsItems = JSON.parse(localStorage.getItem("favorites"));

            
//             if (!myEventsItems) {
//             addedFavoritesArray.push(card);
//             localStorage.setItem("favorites", JSON.stringify(addedMyEventsArray));
//             swal("Good job!", "Products added successfully!", "success");
//             } 
    
//             else {


//             const isExits = myEventsItems.find((phone) => phone.id === id);
          
//           if (!isExits) {
    
//             addedMyEventsArray.push(... myEventsItems, card);
//             localStorage.setItem("favorites", JSON.stringify(addedMyEventsArray));
//             swal("Good job!", "Products added successfully!", "success");
           
//           } else {
//             swal("Error!", "No duplicate !", "error");
//           }
//     }

//     return (
//         <div className="flex justify-center p-16">
//             <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md">
//                 <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
//                     <img
//                         src={image}
//                         alt="image"
//                         className="h-full w-full object-cover"
//                     />
//                 </div>
//                 <div className="p-6">
//                     <h6 className="mb-4 block font-sans text-2xl font-bold uppercase leading-relaxed tracking-normal text-black antialiased">
//                         {name}
//                     </h6>
                    
//                     <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
//                         {seemore}
//                     </p>
//                     <a href="#">
//                         <button onClick={handleAddToMyEvents}
//                             className=" btn-primary flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
//                             type="button"
//                         >
//                             {bookButton}
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="2"
//                                 stroke="currentColor"
//                                 aria-hidden="true"
//                                 className="h-4 w-4"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
//                             </svg>
//                         </button>
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DetailsPage;


import React from 'react';
import swal from 'sweetalert';

const DetailsPage = ({ card }) => {
    const handleAddToMyEvents = () => {
        
        const addedMyEventsArray = [];

        const myEventsItems = JSON.parse(localStorage.getItem("favorites"));

        if (!myEventsItems) {
            addedFavoritesArray.push(card);
            localStorage.setItem("favorites", JSON.stringify(addedMyEventsArray));
            swal("Good job!", "Products added successfully!", "success");
        } else {
            const isExits = myEventsItems.find((phone) => phone.id === id);
            if (!isExits) {
                addedMyEventsArray.push(...myEventsItems, card);
                localStorage.setItem("favorites", JSON.stringify(addedMyEventsArray));
                swal("Good job!", "Products added successfully!", "success");
            } else {
                swal("Error!", "No duplicate!", "error");
            }
        }

    };
    const { id, name, price, image, description, buttonText, shortDetails, bookButton, seemore } = card || {};

    return (
        <div className="flex justify-center p-16">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gray-200 bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-2xl font-bold uppercase leading-relaxed tracking-normal text-black antialiased">
                        {name}
                    </h6>

                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        {seemore}
                    </p>
                    <a href="#">
                        <button onClick={handleAddToMyEvents}
                            className="btn-primary flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            {bookButton}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
