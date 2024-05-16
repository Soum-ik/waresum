/* eslint-disable react/prop-types */

function Education({ education }) {
  return (
    <div className=" flex gap-3 ">
      <div className=" flex items-end flex-col">
        {education.endYear ? (
          <h1 className="font-semibold">
            {education.startYear + " - " + education?.endYear}
          </h1>
        ) : (
          <h1 className="font-semibold">{education.startYear}</h1>
        )}
        <p className="text-black/40 text-xs">{education.university}</p>
      </div>

      <div className=" flex flex-col items-center">
        <h1 className="size-5 rounded-full bg-gray-200 shadow-md border border-primary blur-[1px] shadow-primary"></h1>
        <p className=" h-28 w-[1px] bg-black/30"></p>
      </div>

      <div>
        <h1 className=" font-semibold">{education.title}</h1>
        <h1 className=" max-w-[300px] text-black/40 text-xs">
          {education.description}
        </h1>
      </div>
    </div>
  );
}

export default Education;
