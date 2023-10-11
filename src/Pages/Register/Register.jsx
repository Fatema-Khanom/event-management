// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import React from 'react';
// import auth from '../../Firebase/firebase.config';

// function Register() {
//     const handleregister= e=>{
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.password.value;
//         createUserWithEmailAndPassword(auth, email, password)
//         .then(result=>{
//             console.log(result.user )
//         })
//         .catch(error=>{
//             console.error(error)
//         })
//     }
//     return (
//         <div className="  flex justify-center items-center">
//             <div className="bg-gray-200 mt-16 p-16 rounded-lg shadow-md">
//                 <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//                 <form onSubmit={handleregister} className='w-72 '>
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
//                     >
//                         Register
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Register;

import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import auth from '../../Firebase/firebase.config';

function Register() {
    const handleregister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value; // Corrected this line
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="flex justify-center items-center">
            <div className="bg-gray-200 mt-16 p-16 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
                <form onSubmit={handleregister} className="w-72">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-200"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-200"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
  
