const Projects = ({ projectTitleArray }) => {
  return (
    <>
      <ul>
        {projectTitleArray.map((projectTitle, index) => (
          <li
            key={index+1}
            className= "cursor-pointer w-3/4 font-inter bg-stone-700 text-stone-400 mt-4 py-2 px-2 text-lg font-semibold"
          >
            {projectTitle.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Projects;
