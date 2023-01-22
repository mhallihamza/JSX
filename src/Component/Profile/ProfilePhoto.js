import image from "../../images/photo.jpg"

const Photo = () => {
    return (
      <>
      <div className="flex justify-center mt-5">
       <img src={image} alt="profilephoto" className="h-44 w-44 "></img>
       </div>
      </>
    );
   };
   export default Photo;