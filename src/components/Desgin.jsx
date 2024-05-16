/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

function Desgin({ design }) {
   
  const per = `w-[${design.percentage}%]`;
  console.log(per);
  return (
    <div className=" space-y-1">
      <div className=" flex justify-between items-center">
        <h1>{design.name}</h1>
        <h1>{design.percentage}</h1>
      </div>
      <div className=" border border-primary p-1 w-full rounded-md">
        <p className={` h-1 rounded-md   !${per} bg-primary`}></p>
      </div>
    </div>
  );
}

export default Desgin;
