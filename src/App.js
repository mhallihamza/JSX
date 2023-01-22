import './App.css';
import Photo from "./Component/Profile/ProfilePhoto.js";
import FullName from "./Component/Profile/FullName.js";
import Address from "./Component/Profile/Address.js";
function App() {
  return (
  <div className="profile">
    <Photo/>
    <FullName/>
    <Address/>
  </div>
  );
}

export default App;
