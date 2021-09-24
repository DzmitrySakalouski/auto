import './App.css';
import {useEffect, useState} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"; 
import { Dashboard } from './components/dashboard/dashboard';

function App() {
  const db = getFirestore();
  const [data, setData] = useState(null);

  const getOffers = async () => {
    const groupsSnapshot = await getDocs(collection(db, "offerGroups"));
    const offersSnapshot = await getDocs(collection(db, "orders"));
    const groups = [];
    groupsSnapshot.forEach(snap => groups.push(snap.data()));
    const offers = [];
    offersSnapshot.forEach(snap => offers.push(snap.data()));
    const tableData = groups.map(group => {
      return {
        ...group,
        offers: offers.filter(offer => offer.groupId === group.id) 
      }
    });
    console.log(tableData);
    setData(tableData);
  }

  useEffect(() => {
    getOffers();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      <div className="logo_container">
        <div className="logo" />
      </div>
      </header>
      <h1 className="header_title">Наши цены</h1>
      <div className="dashboard_wrapper">
        <Dashboard tableData={data} />
      </div>
    </div>
  );
}

export default App;
