import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { items as data } from "../utils/items";

const items = [
  {
    label: "Challenge name",
    name: "title",
    type: "text",
    placeholder: "Enter challenge name",
  },
  {
    label: "Start date",
    name: "startDate",
    type: "date",
    placeholder: "Enter start date",
  },
  {
    label: "End date",
    name: "endDate",
    type: "date",
    placeholder: "Enter end date",
  },
  {
    label: "Image",
    name: "image",
    type: "file",
    placeholder: "Select challenge image",
  },
];

const style = "border px-4 py-2 rounded-sm focus:border-custom-light outline-none w-full"; // Ensure full width for inputs

const Admin = () => {
  const filePickerRef = useRef(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    type: "Easy",
    image: null,
    description: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const selectedFile = e.target.files[0];
      if (selectedFile && !selectedFile.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }
      setFile(selectedFile);
      setFormData({
        ...formData,
        image: selectedFile,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: data.length,
      ...formData,
      image: file ? URL.createObjectURL(file) : null,
    };

    data.push(newItem);
    navigate("/hackathon");
  };

  return (
    <section className="flex flex-col h-screen">
      <div className="py-4">
        <h4 className="max-w-6xl mx-auto text-white font-semibold">Challenge Details</h4>
      </div>
      <div className="bg-white py-16 flex-1">
        <form className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-6" onSubmit={handleSubmit}>
          <div className="col-span-1 space-y-8">
            {items.map((item) => (
              <div className="flex flex-col space-y-2" key={item.label}>
                <label htmlFor={item.name} className="text-sm font-semibold">{item.label}</label>
                {item.type === "file" ? (
                  <input
                    type={item.type}
                    name={item.name}
                    className={`${style} file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-green-50 file:text-green-500
                    hover:file:bg-green-100`}
                    ref={filePickerRef}
                    onChange={handleChange}
                    accept="image/*"
                    required
                  />
                ) : item.type === "date" || item.type === "text" ? (
                  <input
                    type={item.type}
                    id={item.name}
                    name={item.name}
                    placeholder={item.placeholder}
                    className={style}
                    onChange={handleChange}
                    required
                  />
                ) : null}
                {item.type === "file" && file && (
                  <div className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="selected image"
                      className="rounded-sm"
                    />
                    <button
                      type="button"
                      className="bg-red-500 text-white absolute right-4 bottom-4 rounded-xl"
                      onClick={() => {
                        setFile(null);
                        setFormData({ ...formData, image: null });
                        filePickerRef.current.value = null; // Reset the file input
                      }}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
            {/* Level Type Selection */}
            <div className="flex flex-col space-y-2">
              <label className="block font-medium">Level Type</label>
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
            </div>
          </div>
          {/* Description Field - Moved below Image */}
          <div className="flex flex-col space-y-2 col-span-1">
            <label htmlFor="description" className="text-sm font-semibold">Description</label>
            <textarea
              id="description"
              name="description"
              className={`${style} h-full resize-none`}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-custom-green text-white rounded-xl py-2" // Full width button
          >
            Create challenge
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
