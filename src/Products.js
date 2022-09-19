import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
//import db from "./firebase";
import db from "./fb";

const Dot = () => {

}; 

function App(){
  const [demoUsers,setdemoUsers] = useState([{name:"loading...", id:"initial"}]);
  console.log(demoUsers);
  useEffect(
    () =>
   onSnapshot(collection(db,"demoUsers"), (snapshot) => 
     setdemoUsers(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id})))  //only returns data Not the "id"
    ),
    [] 
  );

  
  return (
   <div className="root">
    
    <ul>
     {demoUsers.map((demoUser)=>(
      <li>
      <Dot demoUser = {demoUser.value}/>
      
      name:{demoUser.name}&nbsp; &nbsp; username:{demoUser.username}&nbsp;&nbsp;id:{demoUser.id}&nbsp;&nbsp;email:{demoUser.email}&nbsp;&nbsp;phone:{demoUser.phone}&nbsp;&nbsp;website:{demoUser.website}
    </li>
     ))}
    </ul>
   </div>
  );
}

export default App;