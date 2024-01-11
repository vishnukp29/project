import Form from "../Forms/Form";
import space from '../../assets/space.jpg'
import lib from '../../assets/libr.jpg'
import hr from '../../assets/hr.jpg'
import img from '../../assets/imgg.png'

const Card = () => {
  return (
    <section className="flex items-center bg-white font-display min-h-screen py-6">
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="px-4 m-5 md:text-center md:m-10 ">
          <h2 className=" text-2xl lg:text-4xl font-bold text-center text-gray-700 ">
          Feb2k23 Workshops
          </h2>
        </div>

        <div className="mb-2 md:hidden">
          <Form />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-[#FF6700]  shadow-md ">
            <a href="#" className="">
              <img
                src={space}
                alt=""
                className="object-cover w-full md:h-64 h-1/2"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-100">
                  Python Space Invaders
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-50">
                Master Python and Pygame through hands-on learning with Space
                Invaders. Enhance programming skills, problem-solving, and game
                development understanding, setting the stage for future projects
                in software development.
              </p>
            </div>
          </div>
          <div className="bg-[#FF6700] shadow-md ">
            <a href="#" className="">
              <img
                src={lib}
                alt=""
                className="object-cover w-full h-64"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-100">
                  Python Library Management Unleashed
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-50">
                Sharpen Python skills by developing a library management
                project, gaining hands-on expertise in efficient organization
                and utilization of libraries for effective software development.
              </p>
            </div>
          </div>
          <div className="bg-[#FF6700] shadow-md ">
            <a href="#" className="">
              <img
                src={hr}
                alt=""
                className="object-cover w-full h-64 "
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-100">
                  Python HR Analytics: Employee Attrition Insights
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-50">
                Dive into data science and machine learning with a Python
                project on employee attrition, gaining valuable skills in
                predicting and mitigating workforce turnover for informed HR
                decision-making.
              </p>
            </div>
          </div>
          <div className="bg-[#FF6700] shadow-md ">
            <a href="#" className="">
              <img
                src={img}
                alt=""
                className="object-cover w-full h-64 "
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-semibold tracking-tight text-gray-100 ">
                  Python Image Classification with AI and Deep Learning.
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-50 ">
                Explore the world of AI and deep learning through a Python
                project on image classification, acquiring practical skills in
                building and training models for accurate automated image
                recognition.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 invisible md:visible">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Card;
