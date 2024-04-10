import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faEdit } from '@fortawesome/free-solid-svg-icons';

const UserProfileCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-52">
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="text-blue-500 mr-2" />
          <span className="text-gray-700">{user.name}</span>
        </div>
        <FontAwesomeIcon icon={faEdit} className="text-gray-500 cursor-pointer hover:text-blue-500" />
      </div>
      <div className="flex items-center mb-4">
        <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2" />
        <span className="text-gray-700">{user.email}</span>
      </div>
      
    </div>
  );
};

const TargetaUsuario = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <UserProfileCard user={user} />
      
    </div>
  );
};

export default TargetaUsuario
