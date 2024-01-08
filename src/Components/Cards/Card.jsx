import Form from "../Forms/Form";
const Card = () => {
  return (
    <section className="flex items-center bg-gray-100  font-display min-h-screen py-6">
      <div className="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
        <div className="px-4 m-5 md:text-center md:m-10 ">
          <h2 className=" text-2xl lg:text-4xl font-bold text-center text-gray-700 ">
            Title Here
          </h2>
        </div>

        <div className="mb-2 md:hidden">
          <Form />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md ">
            <a href="#" className="">
              <img
                src="https://www.zdnet.com/a/img/resize/605df164b50d7127344cce4c41e5e2a36ac951b4/2023/04/05/e0478a88-b3ed-4516-8459-e0b919b4b2bc/artificial-intelligence.jpg?auto=webp&width=1280"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Lorem ipsum dor ismudsa suditdsas
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                There are some dummy text which helps to write message for the
                receivers.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md ">
            <a href="#" className="">
              <img
                src="https://bluebik.com/storage/2021/06/AI-2-1.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Lorem ipsum dor ismudsa suditdsas
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                There are some dummy text which helps to write message for the
                receivers.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md ">
            <a href="#" className="">
              <img
                src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Lorem ipsum dor ismudsa suditdsas
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                There are some dummy text which helps to write message for the
                receivers.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md ">
            <a href="#" className="">
              <img
                src="https://media.springernature.com/w580h326/nature-cms/uploads/collections/AI_and_machine_learning-00afb90f3d21234fd0f207243f60aa8e.jpg"
                alt=""
                className="object-cover w-full h-64 rounded-t-lg"
              />
            </a>
            <div className="p-5">
              <a href="#" className="">
                <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-700 dark:text-gray-400">
                  Lorem ipsum dor ismudsa suditdsas
                </h2>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                There are some dummy text which helps to write message for the
                receivers.
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
