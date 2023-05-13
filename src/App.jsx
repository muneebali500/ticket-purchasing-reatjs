import { useState, useEffect } from "react";

///////// IMPORTING THIRD PARTY LIBRARIES ///////////////////
import { Routes, Route } from "react-router-dom";

//////////////// IMPORTING CUSTOM COMPONENTS //////////////////////
import { Layout } from "./components";

//////////////// IMPORTING CUSTOM PAGES //////////////////////
import { Home, BillingInfo, Checkout, ErrorPage } from "./pages";

///////////////// START OF MAIN FUNCTION /////////////////////

function App() {
  const [showInfo, setShowInfo] = useState([]);

  ////////// mocking getting show list from backend on initial render.
  useEffect(() => {
    async function fetchShowList() {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        setShowInfo(data);
      } catch (err) {
        alert("There was something wrong, please try again");
      }
    }

    fetchShowList();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home showInfo={showInfo} />} />
        <Route
          path="/show-detail/:id"
          element={<BillingInfo showInfo={showInfo} />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
