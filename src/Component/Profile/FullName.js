const firstname='Hamza';
const lastname='Mhalli';
const FullName =()=>{
    return (
        <div className="absolute left-[10%] top-[30%] w-[20%]">
            <div className="text-center text-3xl">Hello, I'm</div>
        <div className=" text-5xl text-center font-lobster">{firstname} {lastname}</div>
        </div>
    );
}
export default FullName;