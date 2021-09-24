import './App.css';
import {useEffect} from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore"; 

function App() {
  const db = getFirestore();

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
  }

  useEffect(() => {
    getOffers();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
