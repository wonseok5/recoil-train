import React, { useEffect, useState } from "react";
import { User, UsersAPI } from "../../apis/users";
import Layout from "../../components/Layout";
import { useAsync } from "../../hooks";
import UserItem from "./components/UserItem";

const UserManagementPage = () => {
  const [allUsers, setAllUsers] = useState<User[] | null>(null);
  useAsync(async () => {
    const { users } = await UsersAPI.getAllUsers();
    setAllUsers(users);
  }, []);
  return (
    <Layout>
      {allUsers ? (
        <div className="space-y-4">
          {allUsers.map((aUser) => (
            <UserItem key={aUser.id} user={aUser} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Layout>
  );
};

export default UserManagementPage;
