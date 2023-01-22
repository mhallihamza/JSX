const firstname='hamza';
const lastname='mhalli';
const FullName =()=>{
    return (
        <div className="flex justify-center mt-6">
        <div className="text-red-700 text-3xl ">{firstname} {lastname}</div>
        </div>
    );
}
export default FullName;