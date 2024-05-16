import Sidebar from "../sidebar";

function Home() {
  return (
    <Sidebar>
      <div className=" my-5 mx-5 w-full text-center flex items-center justify-center min-h-[80vh]  ">
        <div>
          <h1 className=" mb-2 text-5xl font-bold ">Sadekur Rahman Rana </h1>
          <h1 className=" text-gray-400 text-2xl">Managing Director at The waresun Limited</h1>
        </div>
      </div>
    </Sidebar>
  );
}

export default Home;
