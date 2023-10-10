// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import DetailsPage from '../../DetailsPage';

// const SeeMore = () => {
//     const [seeMore,setSeemore] = useState()
//     const {id} =useParams()
//     const seemore = useLoaderData()
//     useEffect(()=>{
//         const findDetails = seemore?.find(seeMore => seeMore ==id);
//         setSeemore(findDetails)
//     },[id,seemore])
    
   
//     return (
        
//           <div>
//             <DetailsPage seemore={seemore}></DetailsPage>
//           </div>
        
//     );
// };

// export default SeeMore;
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'; // Removed unnecessary import
import DetailsPage from '../../DetailsPage';

const SeeMore = () => {
    const [seemore, setSeemore] = useState(null);
    const { id } = useParams(); // Destructure the "id" parameter
    const seemoreData = useLoaderData(); // Assuming you have the "useLoaderData" function defined elsewhere

    useEffect(() => {
        // Assuming you have the "seemoreData" (or a similar) array containing your data
        const findDetails = seemoreData?.find(seeMore => seeMore.id === id); // Use "===" for comparison
        setSeemore(findDetails);
    }, [id, seemoreData]); // Include "id" and "seemoreData" in the dependency array

    return (
        <div>
            <DetailsPage card={seemore}></DetailsPage> {/* Pass "card" prop instead of "seemore" */}
        </div>
    );
};

export default SeeMore;
