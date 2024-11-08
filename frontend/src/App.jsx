import { useEffect, useState } from "react";
import Footer from "./Component/Footer";
import Loader from "./Component/Loader";
import { Navbar } from "./Component/Navbar";

import AllRoutes from "./Routes/AllRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      setIsLoading(true);
      let timer = setTimeout(() => {
          setIsLoading(false);
          return () => clearInterval(timer);
      }, 1000);
  }, []);
    return isLoading?(
      <Loader/>
    ):(
    <>
      <Navbar/>  
        <div style={{marginTop : "150px"}}></div>
        
        <AllRoutes />
    
      
      <Footer/>
    </>
    )


}

export default App;