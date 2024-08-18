import { useRef, useState } from "react";

const Model = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const { firstname, lastname, email } = formData;
  const modelRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(
      ` Your First Name: ${firstname} Your Last name: ${lastname} and Email: ${email}`
    );

    setFormData({ firstname: "", lastname: "", email: "" });
    onClose();
  };

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };
  return (
    <>
      <div
        ref={modelRef}
        onClick={closeModel}
        className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-30 backdrop-blur-sm cursor-default"
      >
        <div className="bg-gray-50 p-4 rounded-md flex backdrop-blur-none flex-col max-w-[640px]  opacity-95">
          <div className="place-self-end">
            <button>
              <div
                onClick={onClose}
                className=" text-black shadow-md p-2 bg-red-500 rounded-2xl"
              >
                Close
              </div>
            </button>
          </div>
          <h1 className="text-xl font-bold text-center text-black">
            Model Form <span className="text-purple-500">Vrit Task</span>
          </h1>
          <form
            onSubmit={onSubmitHandler}
            className="text-purple-900 px-8 cursor-default"
          >
            <div className=" text-ellipsis overflow-hidden text-nowrap h-12"></div>

            <div>
              <label htmlFor="firstname " className="text-xl">
                First Name:
              </label>
              <input
                className="text-primary-dark w-full rounded-lg   border border-violet-700 p-2 m-1 font-medium focus:outline-none "
                type="text"
                name="fullname"
                id="fullname"
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })
                }
                placeholder="Enter First Name..."
              />
            </div>

            <div>
              <label htmlFor="lastname " className="text-xl">
                Last Name:
              </label>
              <input
                className="text-primary-dark w-full rounded-lg   border border-violet-700 p-2 m-1 font-medium focus:outline-none "
                type="text"
                name="lastname"
                id="lastname"
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
                placeholder="Enter Last Name..."
              />
            </div>

            <div>
              <label htmlFor="lastname " className="text-xl">
                Email:
              </label>
              <input
                className="text-primary-dark w-full rounded-lg border border-violet-700 p-2 m-1 font-medium focus:outline-none"
                type="text"
                placeholder="Enter Your Email..."
                name="email"
                id="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="mt-2 flex  justify-center items-center mb-4 ">
              <button
                type="submit"
                className="bg-green-500 font-semibold text-center p-4 w-max h-min text-black rounded-full shadow-lg  "
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Model;
