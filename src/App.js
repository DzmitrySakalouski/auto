import "./App.css";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { Dashboard } from "./components/dashboard/dashboard";
import { Instagram } from "@material-ui/icons";
import { IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d32e20",
    },
  },
});

function App() {
  const db = getFirestore();
  const [data, setData] = useState(null);

  const getOffers = async () => {
    const groupsSnapshot = await getDocs(collection(db, "offerGroups"));
    const offersSnapshot = await getDocs(collection(db, "orders"));
    const groups = [];
    groupsSnapshot.forEach((snap) => groups.push(snap.data()));
    const offers = [];
    offersSnapshot.forEach((snap) => offers.push(snap.data()));
    const tableData = groups.map((group) => {
      return {
        ...group,
        offers: offers.filter((offer) => offer.groupId === group.id),
      };
    });
    console.log(tableData);
    setData(tableData);
  };

  useEffect(() => {
    getOffers();
  }, []);

  const handleInstPress = () => {
    window.location.href =
      "https://instagram.com/alexeenkov_studiogarage?utm_medium=copy_link";
  };

  const handleCall = () => {
    window.open("tel:+375447513600");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <div className="logo" />
          <div className="contact">
            <div onClick={handleCall} className="contact_text underline">
              +375 44 751 36 00
            </div>
            <div className="contact_text">ул. Белыницкого-Бирули 123/45</div>
          </div>

          <div id="instagram_anim">
            <IconButton color="primary" onClick={handleInstPress}>
              <Instagram style={{ width: 70, height: 70 }} />
            </IconButton>
          </div>
        </header>
        <h1 className="header_title">Услуги и цены</h1>
        <div className="dashboard_wrapper">
          <Dashboard tableData={data} />
        </div>
      </div>
      <div className="bottom">
        <div className="contact">
          <div onClick={handleCall} className="contact_text underline">
            +375 44 751 36 00
          </div>
          <div className="contact_text">ул. Белыницкого-Бирули 123/45</div>
        </div>
        УНП 123 123 123
      </div>
    </ThemeProvider>
  );
}

export default App;
