import React from 'react';
import { useFetchUserData } from '../../services/userService';
import './UserKeyData.css';
import proteinIcon from '../../assets/protein-icon.png';
import calorieIcon from '../../assets/calories-icon.png';
import carbohydrateIcon from '../../assets/carbs-icon.png';
import lipidIcon from '../../assets/fat-icon.png';

const UserKeyData = ({ userId }) => {
  const { user, loading, error } = useFetchUserData(userId);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;
  if (!user) return null;

  const { keyData } = user.data;

  return (
    <div className="key-data-container">
      <div className="key-data-item">
        <img src={calorieIcon} alt="Calories" className="key-data-icon" />
        <div className="key-data-text">
          <h3>{keyData.calorieCount} kcal</h3>
          <p>Calories</p>
        </div>
      </div>
      <div className="key-data-item">
        <img src={proteinIcon} alt="Proteines" className="key-data-icon" />
        <div className="key-data-text">
          <h3>{keyData.proteinCount} g</h3>
          <p>Proteines</p>
        </div>
      </div>
      <div className="key-data-item">
        <img src={carbohydrateIcon} alt="Glucides" className="key-data-icon" />
        <div className="key-data-text">
          <h3>{keyData.carbohydrateCount} g</h3>
          <p>Glucides</p>
        </div>
      </div>
      <div className="key-data-item">
        <img src={lipidIcon} alt="Lipides" className="key-data-icon" />
        <div className="key-data-text">
          <h3>{keyData.lipidCount} g</h3>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
};

export default UserKeyData;
