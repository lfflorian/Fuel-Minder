import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

interface FuelPurchases {
  moneySpent: string;
  gallonsPurchased: string;
  currentMileage: string;
  date: string;
}

const DataRecording: React.FC = () => {
  const [fuelPurchase, setFuelPurchase] = useState<FuelPurchases>({
    moneySpent: '',
    gallonsPurchased: '',
    currentMileage: '',
    date: new Date().toISOString().split('T')[0],
  });

  const handleRecordData = () => {
    const data: FuelPurchases = {
      ...fuelPurchase,
      date: new Date(fuelPurchase.date).toISOString(),
    };

    firebase
      .firestore()
      .collection('records')
      .add(data)
      .then(() => {
        console.log('Data recorded successfully!');
        // Clear the input fields
        setFuelPurchase({
          moneySpent: '',
          gallonsPurchased: '',
          currentMileage: '',
          date: new Date().toISOString().split('T')[0],
        });
      })
      .catch((error) => {
        console.error('Error recording data:', error);
      });
  };

  return (
    <div>
      <h2>Data Recording</h2>
      <input
        type="text"
        placeholder="Money spent"
        value={fuelPurchase.moneySpent}
        onChange={(e) =>
          setFuelPurchase({ ...fuelPurchase, moneySpent: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Gallons purchased"
        value={fuelPurchase.gallonsPurchased}
        onChange={(e) =>
          setFuelPurchase({ ...fuelPurchase, gallonsPurchased: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Current mileage"
        value={fuelPurchase.currentMileage}
        onChange={(e) =>
          setFuelPurchase({ ...fuelPurchase, currentMileage: e.target.value })
        }
      />
      <input
        type="date"
        placeholder="Date"
        value={fuelPurchase.date}
        onChange={(e) =>
          setFuelPurchase({ ...fuelPurchase, date: e.target.value })
        }
      />
      <button onClick={handleRecordData}>Record Data</button>
    </div>
  );
};

export default DataRecording;
