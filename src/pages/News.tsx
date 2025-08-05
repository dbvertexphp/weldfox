import Footer from "@/components/Footer";
import HeaderPages from "@/components/Header-Pages";
import StickyHeader from "@/components/StickyHeader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const news = [
      {
            // img: "/news-1.jpg",
            img: "/news1.jpg",
            date: " APRIL 2, 2019",
            category: "GARDEN",
            userType: "Smartman",
            heading: "Use brick borders for path edging",
            description:
                  "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute dolor in reprehenderit in voluptate velit esse cillum",
      },
      {
            // img: "/news-2.jpg",
            img: "/news2.jpg",
            date: " APRIL 2, 2019",
            category: "GARDEN",
            userType: "Smartman",
            heading: "Use brick borders for path edging",
            description:
                  "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute dolor in reprehenderit in voluptate velit esse cillum",
      },
      {
            // img: "/news-3.jpg",
            img: "/news3.jpg",
            date: " APRIL 2, 2019",
            category: "GARDEN",
            userType: "Smartman",
            heading: "Use brick borders for path edging",
            description:
                  "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute dolor in reprehenderit in voluptate velit esse cillum",
      },
      {
            // img: "/news-4.jpg",
            img: "/news4.jpeg",
            date: " APRIL 2, 2019",
            category: "GARDEN",
            userType: "Smartman",
            heading: "Use brick borders for path edging",
            description:
                  "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute dolor in reprehenderit in voluptate velit esse cillum",
      },
      {
            img: "/news-5.jpg",
            date: " APRIL 2, 2019",
            category: "GARDEN",
            userType: "Smartman",
            heading: "Use brick borders for path edging",
            description:
                  "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute dolor in reprehenderit in voluptate velit esse cillum",
      },
      {
            img: "/news-6.jpg",
            date: " APRIL 2, 2019",
            category: "GARDEN",
            userType: "Smartman",
            heading: "Use brick borders for path edging",
            description:
                  "Veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exa aute dolor in reprehenderit in voluptate velit esse cillum",
      },
];

export const News = () => {
      return (
            <div className="font-montserrat">
                  <HeaderPages />

                  <div className="relative  w-full">
                        <img
                              src="/about-banner.jpg"
                              alt="About Us Banner"
                              className="w-full h-[300px] object-cover"
                        />
                        <div className="absolute inset-0 bg-[#1a2940] opacity-80"></div>
                        <div className="absolute top-[200px] md:top-[150px] left-1/2 transform -translate-x-1/2 z-10 px-4 w-full flex justify-center">
                              <div className="bg-white w-full max-w-[700px] shadow-lg p-6 md:p-10 text-center">
                                    <h2 className="text-4xl md:text-6xl font-md text-gray-900 mb-2">
                                          Latest News
                                    </h2>
                                    <p className="text-gray-500 leading-relaxed text-base">
                                          <Link
                                                to="/"
                                                className="hover:text-[#F79D2B] transition-colors duration-200"
                                          >
                                                HOME
                                          </Link>{" "}
                                          &nbsp; /
                                          <span className=" transition-colors duration-200">
                                                &nbsp; OUR BLOG
                                          </span>
                                    </p>
                              </div>
                        </div>
                  </div>

                  <StickyHeader />


                  <div className="w-full px-4 py-16 bg-white mt-[60px] md:mt-[50px]">
                        <div className="max-w-6xl px-5 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                              {news?.map((ele, index) => (
                                    <div
                                          key={index}
                                          className="group overflow-hidden bg-white "
                                    >
                                          <img
                                                src={ele.img}
                                                alt="news"
                                                className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                                          />
                                          <div className="py-10">
                                                <div className="text-sm text-gray-500 mb-2">
                                                      <span className="font-[14px] text-[#999999] hover:text-[#f79d2b] hover:cursor-pointer">
                                                            SMARTMAN
                                                      </span>{" "}
                                                      /
                                                      <span className="ml-1  text-[#999999] hover:text-[#f79d2b] hover:cursor-pointer">
                                                            {ele.date}
                                                      </span>{" "}
                                                      /
                                                      <span className="ml-1  text-[#999999] hover:text-[#f79d2b] hover:cursor-pointer">
                                                            {ele.category}
                                                      </span>
                                                </div>
                                                <h2 className="text-2xl font-bold text-gray-800">
                                                      {ele.heading}
                                                </h2>
                                                <p className="text-[#555555] mt-2 text-[15px]">
                                                      {ele.description}
                                                </p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>

                  {/* <div className="w-full h-[250px] bg-[url('/glass-gazing.jpg')] bg-yellow-800 bg-opacity-90 bg-blend-multiply bg-center bg-cover flex items-center">
                        <div className="max-w-6xl px-5 mx-auto  grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full">
                              <div className="flex items-center justify-center space-x-4 text-white">
                                    <img
                                          src="/flat-email-1.png"
                                          alt="email"
                                          className="w-12 h-12"
                                    />
                                    <div>
                                          <h2 className="text-3xl font-bold">
                                                Subscribe to Our Newsletter
                                          </h2>
                                          <p className="text-[15px]">
                                                Stay in touch with us to get
                                                latest news and discount coupons
                                          </p>
                                    </div>
                              </div>
                              <form className="flex w-full max-w-md mx-auto md:mx-0">
                                    <input
                                          type="email"
                                          placeholder="Email address"
                                          required
                                          className="w-full p-4 text-sm text-gray-700 outline-none"
                                    />
                                    <button
                                          type="submit"
                                          className="bg-[#0e1f3e] text-white px-4 flex items-center justify-center "
                                    >
                                          <MailOutlineIcon />
                                    </button>
                              </form>
                        </div>
                  </div> */}

                  <Footer />
            </div>
      );
};
