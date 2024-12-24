import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'John Tel',
      image: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg',
      places: 3
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
