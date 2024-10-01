
export default function Home() {
  return (
    <>
      {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="a1">Sajid Ali</span>
          <br />I am lrarning Next-JS 
        </div>
        <div className="childContainer"></div>
      </div>

      {/* Below Code Is With Tailwind */}
      <div className="flex justify-between items-center">
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          Hey,
          <br />
          My Name is <span className="a2">Sajid Ali</span>
          <br />I am Learning Next-JS 
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
