import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { items } from "../utils/items";
import Navbar from "./Navbar";
import imageIcom from "../assets/bi_image-fill.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const EditChallenge = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    type: "Easy",
    image: "",
    description: "",
  });

  useEffect(() => {
    const item = items[id];

    // Convert dates to 'YYYY-MM-DD' format if they are not already
    const formatDate = (date) => {
      if (!date) return "";
      const d = new Date(date);
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
    };

    setFormData({
      title: item.title,
      startDate: formatDate(item.startDate),
      endDate: formatDate(item.endDate),
      type: item.type,
      image: item.image,
      description: item.description,
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: URL.createObjectURL(e.target.files[0]),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    items[id] = { ...formData, id: id };
    navigate(`/hackathon/details/${id}`);
  };

  return (
    <section className="flex flex-col bg-white mb-20">
      <Navbar />
      <header className="w-full mx-auto space-y-10">
        <div className="h-20 flex items-center text-3xl px-4 md:px-10 lg:px-36 font-semibold text-black bg-gray-200">
          Challenge Details
        </div>
        <form className="w-full max-w-4xl mx-auto space-y-4 px-4 md:px-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <label className="block font-medium">
              Challenge Title
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border-2 border-gray-300 font-medium px-4 py-1 mt-3 rounded-md w-full outline-none"
              />
            </label>
            <label className="block font-medium">
              Start Date
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="border-2 border-gray-300 font-medium px-4 py-1 mt-3 rounded-md w-full outline-none"
              />
            </label>
            <label className="block font-medium">
              End Date
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="border-2 border-gray-300 font-medium px-4 py-1 mt-3 rounded-md w-full outline-none"
              />
            </label>

            <label className="block font-medium">
              Description
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="border-2 border-gray-300 font-medium px-4 py-1 mt-3 rounded-md w-full h-44 outline-none"
              />
            </label>
            <label className="block font-medium">
              Image
              <div className="bg-gray-200 rounded-md p-3">
                {formData.image && (
                  <img
                    src={formData.image}
                    alt="Selected"
                    className="mt-2 w-48 rounded-xl"
                  />
                )}

                <input
                  type="file"
                  id="imageInput"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <label
                  htmlFor="imageInput"
                  className="w-[80%] gap-2 flex cursor-pointer text-green-600 bg-gray-200 font-medium px-4 py-1 mt-3 rounded-md"
                >
                  <img src={imageIcom} alt="Change" />
                  Change Image
                  <FaArrowRightLong className="mt-1" />
                </label>
              </div>
            </label>
            <label className="block font-medium">
              Level Type
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="border-2 border-gray-300 font-medium px-4 py-2 mt-3 rounded-md w-full outline-none"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </label>
          </div>
          <button
            type="submit"
            className="w-fit bg-custom-green text-white rounded-xl px-4 py-2"
          >
            Save Changes
          </button>
        </form>
      </header>
    </section>
  );
};

export default EditChallenge;
