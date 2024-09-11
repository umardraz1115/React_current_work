const ProjectDetail = ({ details }) => {
  console.log(details);
  return (
    <div className="w-[1116px]">
      <div className="w-full p-6 flex justify-center">
        <div className="bg-white shadow-lg rounded-lg w-9/12 p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
              {details.title}
            </h2>
            <p className="text-lg text-gray-600 mb-2">{details.description}</p>
            <p className="text-sm text-gray-400">{details.date}</p>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Edit Project
            </button>
            <button className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
              Delete Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
