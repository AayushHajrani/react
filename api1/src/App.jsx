import { useState, useEffect } from "react";
import { getpost,getrandomuser } from "./api";
import Postcard from './components/Postcard'
import './index.css'
import Usercard from "./components/Usercard";

function App() {
  const [data, setdata] = useState(null);
  const [user,setuser] = useState(null)

  useEffect(() => {
    getpost().then((posts) => setdata(posts));
  }, []);

  useEffect(()=>{
    getrandomuser().then((users)=> setuser(users.results[0]))
  
  },[])

  const refresh = ()=>{
    getrandomuser().then((users)=> setuser(users.results[0]))
  }

  return <div className="post-card">
   { user &&  <Usercard data={user}/>}
   <button onClick={refresh}>refresh</button>
    {
    data ? data.map((e) => <Postcard title={e.title} body={e.body}/>) : <p>no data</p>
    }

    </div>;
}

export default App;
