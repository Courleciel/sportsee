import React from 'react';
import { useFetchUserData } from '../../services/userService';
import './UserDetails.css';

const UserDetails = ({ userId }) => {
  const { user, loading, error } = useFetchUserData(userId);

  if (loading) {
    return <p>Chargement des données de l'utilisateur...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {user && (
        <div>
          <h1>Bonjour <span className="user-first-name">{user.data.userInfos.firstName}</span></h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
