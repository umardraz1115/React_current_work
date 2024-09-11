const ProjectDetail = ({ details }) => {
  console.log(details);
  return (
    <div className="w-[1116px]">
      <div className="flex flex-col justify-center h-full w-9/12 ms-16">
        <h2 className="text-2xl font-bold">{details.title}</h2>
        <p>{details.description}</p>
        <p>{details.date}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;
