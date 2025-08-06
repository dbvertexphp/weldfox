// import React from "react";
// import { FaHardHat, FaShieldAlt, FaTools, FaCalendarAlt } from "react-icons/fa";

// const Experience = () => {
//   return (
//     <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
//       {/* LEFT SECTION */}
//       <div className="lg:col-span-3 flex justify-end pr-4">
//         <div className="relative w-[260px] h-[260px] mt-[10px]">
//           <img
//             src="/banner3.jpg"
//             alt="Experience"
//             className="w-full h-full object-cover rounded"
//           />
//           {/* Overlapping White Box */}
//           <div className="absolute inset-6 bg-white shadow-md flex flex-col justify-center items-center p-4">
//             <p className="text-9xl font-bold text-[#F79D2B] leading-none">15</p>
//             <p className="text-sm mt-1 text-center text-gray-600 leading-tight tracking-wider uppercase">
//               Years of <br /> METAL & CRAFT AUTOMATION Experience
//             </p>
//           </div>
//         </div>
//       </div>

      
//       <div className="lg:col-span-5">
//         <p className="text-sm text-gray-500 uppercase tracking-wider ml-3 mt-0">
//           The METAL & CRAFT AUTOMATION Company
//         </p>
//         <div className="flex mt-2">
//           <div className="w-1 h-[220px] bg-[#F79D2B] mr-4" />
//           <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold text-[#0f1f3e] leading-snug mt-5">
//             We Offer One <br /> Stop-Shop for <br /> All Your Home <br /> and
//             Commercial <br /> Projects!
//           </h2>
//         </div>
//       </div>
//      <div className="lg:col-span-8 lg:col-start-1 mt-2">
//         <p className="text-gray-500 text-sm leading-6 max-w-[700px]">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
//           voluptatibus soluta, eum, officia cupiditate odio iusto repellat
//           labore, praesentium doloribus necessitatibus incidunt culpa. Ipsum vel
//           cum consequuntur est accusantium culpa, et illo, nesciunt quia sint
//           fugiat sunt explicabo quisquam consectetur consequatur. Tempora
//           inventore, eaque et maiores iste placeat ratione nemo.
//         </p>
//       </div>
      
  
//       <div className="lg:col-span-4 relative z-20 mt-10 lg:-mt-24">
//         <div className="bg-white shadow-lg px-6 py-8 rounded-sm h-[540px] flex flex-col">
//           {/* Each section takes equal height */}
//           <div className="flex-1 flex flex-col justify-center">
//             <div className="flex items-start gap-4">
//               <FaHardHat size={36} className="text-[#F79D2B]" />
//               <div>
//                 <p className="text-lg text-gray-600">Fully Insured</p>
//                 <h4 className="font-semibold text-2xl text-[#2f333a]">
//                   Professionals
//                 </h4>
//               </div>
//             </div>
//             <hr className="border-t border-[#e7e1e1] mt-4" />
//           </div>

//           <div className="flex-1 flex flex-col justify-center">
//             <div className="flex items-start gap-4">
//               <FaShieldAlt size={36} className="text-[#F79D2B]" />
//               <div>
//                 <p className="text-lg text-gray-600">We offer Satisfaction</p>
//                 <h4 className="font-semibold text-2xl text-[#0f1f3e]">
//                   100% Guaranteed
//                 </h4>
//               </div>
//             </div>
//             <hr className="border-t border-[#e7e1e1] mt-4" />
//           </div>

//           <div className="flex-1 flex flex-col justify-center">
//             <div className="flex items-start gap-4">
//               <FaTools size={36} className="text-[#F79D2B]" />
//               <div>
//                 <p className="text-lg text-gray-600">Equipped with</p>
//                 <h4 className="font-semibold text-2xl text-[#0f1f3e]">
//                   All Latest Tools
//                 </h4>
//               </div>
//             </div>
//             <hr className="border-t border-[#e7e1e1] mt-4" />
//           </div>

//           <div className="flex-1 flex flex-col justify-center">
//             <div className="flex items-start gap-4">
//               <FaCalendarAlt size={36} className="text-[#F79D2B]" />
//               <div>
//                 <p className="text-lg text-gray-600">We’re available</p>
//                 <h4 className="font-semibold text-2xl text-[#0f1f3e]">
//                   7 Days a week
//                 </h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* <div className="lg:col-span-8 lg:col-start-1 mt-2">
//         <p className="text-gray-500 text-sm leading-6 max-w-[700px] mt-[150px]">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
//           voluptatibus soluta, eum, officia cupiditate odio iusto repellat
//           labore, praesentium doloribus necessitatibus incidunt culpa. Ipsum vel
//           cum consequuntur est accusantium culpa, et illo, nesciunt quia sint
//           fugiat sunt explicabo quisquam consectetur consequatur. Tempora
//           inventore, eaque et maiores iste placeat ratione nemo.
//         </p>
//       </div> */}
//     </section>
//   );
// };

// export default Experience;


import React from "react";
import {
  FaHardHat,
  FaShieldAlt,
  FaTools,
  FaCalendarAlt,
} from "react-icons/fa";

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT: Image + Text */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Experience Image & Box */}
            <div className="md:col-span-4 relative w-full h-[260px]">
              <img
                src="/banner3.jpg"
                alt="Experience"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute inset-6 bg-white shadow-lg rounded flex flex-col justify-center items-center p-4">
                <p className="text-[80px] font-bold text-[#F79D2B] leading-none">25</p>
                <p className="text-sm text-center text-gray-600 uppercase tracking-wide mt-1">
                  Years of <br />
                  Smartman Experience
                </p>
              </div>
            </div>

            {/* Heading */}
            <div className="md:col-span-8 my-2 px-2">
              <p className="text-sm text-gray-500 uppercase tracking-wider my-2 ">
                The Smartman Company
              </p>
              <div className="flex items-start  ">
                <div className="w-1 h-[220px] bg-[#F79D2B] mr-4 mt-1" />
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1f3e] leading-snug">
                  We Offer One <br />
                  Stop-Shop for <br />
                  All Your Home and <br />
                  Commercial Projects!
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-500 text-sm leading-6 max-w-4xl">
              Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
              exa aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore nulla par. Excepteur sint occaecat. Magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea duis aute irure dolor repreh enderit.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 lg:-mt-24">
          <div className="bg-white shadow-xl rounded-lg px-6 py-8 space-y-6 ">
            {/* Feature 1 */}
            <div className="flex items-start gap-4 my-8">
              <FaHardHat size={36} className="text-[#F79D2B]" />
              <div>
                <p className="text-lg text-gray-600">Fully Insured</p>
                <h4 className="text-2xl font-semibold text-[#0f1f3e]">
                  Professionals
                </h4>
              </div>
            </div>
            <hr />

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <FaShieldAlt size={36} className="text-[#F79D2B]" />
              <div>
                <p className="text-lg text-gray-600">We offer Satisfaction</p>
                <h4 className="text-2xl font-semibold text-[#0f1f3e]">
                  100% Guaranteed
                </h4>
              </div>
            </div>
            <hr />

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <FaTools size={36} className="text-[#F79D2B]" />
              <div>
                <p className="text-lg text-gray-600">Equipped with</p>
                <h4 className="text-2xl font-semibold text-[#0f1f3e]">
                  All Latest Tools
                </h4>
              </div>
            </div>
            <hr />

            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <FaCalendarAlt size={36} className="text-[#F79D2B]" />
              <div>
                <p className="text-lg text-gray-600">We’re available</p>
                <h4 className="text-2xl font-semibold text-[#0f1f3e]">
                  7 Days a week
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
