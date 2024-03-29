import NavbarrTeacher from "./components/NavbarrTeacher";
import Footer from "./components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import BackButton from "./components/BackButton";
import { PageWrapper } from "./components/page-warapper"
const Profile = () => {
  const router = useRouter();
  const [userrr, setUserrr] = useState("");
  useEffect(() => {
    setUserrr(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <NavbarrTeacher />
      <BackButton />
      <PageWrapper>
        <div className="container mx-auto my-10 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
              <div className="bg-0 p-3 border-t-4 border-1">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                </div>
                <Image
                  src="/userpro.png"
                  alt="Pro"
                  width={100}
                  height={100}
                  style={{
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                />
                <h1 className="text-900 font-bold text-xl leading-8 my-1">
                  {userrr.fname} {userrr.lname}
                </h1>
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  {/* {userrr.categories.map((e, i) => {
                  return (
                    <a className=" cursor-pointer">
                      <div
                        className=" bg-100 p-3 mb-1 text-center rounded"
                        key={i}
                      >
                        {e}
                      </div>
                    </a>
                  );
                })} */}
                  {userrr.categories}
                </h3>
                <label>Товч танилцуулга</label>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  {userrr.tovchtaniltsuulga}
                </p>

                <ul className="bg-50 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="bg-1 py-1 px-2 rounded text-white text-sm">
                        Active
                      </span>
                    </span>
                  </li>
                  <li className="flex items-center py-3">
                    <span>Member since</span>
                    <span className="ml-auto">Nov 07, 2016</span>
                  </li>
                </ul>
                <button
                  className="bg-1 p-4 w-50 rounded-3xl mt-6"
                  onClick={() => router.push("/info/formTeacher")}
                >
                  Update profile
                </button>
              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
              {/* <!-- Friends card --> */}
              <div className="bg-0 p-3 hover:shadow">
                <div className="flex items-center space-x-3 font-semibold text-900 text-xl leading-8"></div>
              </div>
              {/* <!-- End of friends card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/12 mx-2">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div className="bg-50 p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-900 leading-8">
                  <span clas="text-1">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">About</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">First Name</div>
                      <div className="px-4 py-2"> {userrr.fname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Last Name</div>
                      <div className="px-4 py-2"> {userrr.lname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Gender</div>
                      <div className="px-4 py-2"> {userrr.gender}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Phone No.</div>
                      <div className="px-4 py-2"> {userrr.pnum1}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Current Address
                      </div>
                      <div className="px-4 py-2">
                        {userrr.province}, {userrr.sum}, {userrr.delgerengui}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Email.</div>
                      <div className="px-4 py-2">
                        <a className="text-blue-800" href={userrr.email}>
                          {userrr.email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Birthday</div>
                      <div className="px-4 py-2">
                        {userrr.month}, {userrr.day}, {userrr.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div className="bg-50 p-3 shadow-sm rounded-sm">
                <div className="grid grid-cols-2">
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-900 leading-8 mb-3">
                      <span clas="text-1">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Experience</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">Coming soon...</div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">Coming soon...</div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">Coming soon...</div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">Coming soon...</div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 font-semibold text-900 leading-8 mb-3">
                      <span clas="text-1">
                        <svg
                          className="h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path
                            fill="#fff"
                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                        </svg>
                      </span>
                      <span className="tracking-wide">Education</span>
                    </div>
                    <ul className="list-inside space-y-2">
                      <li>
                        <div className="text-teal-600">Coming soon...</div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">Coming soon...</div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                      <li>
                        <div className="text-teal-600">Coming soon...</div>
                        <div className="text-gray-500 text-xs">
                          March 2020 - Now
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End of Experience and education grid --> */}
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer></Footer>
    </>
  );
};

export default Profile;
