import React, { useEffect } from "react";

import Request from "../../helpers/request.service";

const Dashboard = () => {
  useEffect(() => {
    getUser(2);
    getSelectedUser();
    getUsers();
  }, []);

  const getUser = async (id) => {
    await Request.get(`/users/${id}`)
      .then((response) => {
        console.log(`user id ${id}`, response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  const getSelectedUser = async () => {
    let param = { limit: 5, skip: 10, select: "firstName,age" };
    await Request.get("/users", param)
      .then((response) => {
        console.log("selected user", response.data);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  const getUsers = async () => {
    await Request.get("/users")
      .then((response) => {
        console.log("all users", response.data.users);
      })
      .catch((error) => {
        console.log("Error fetching users:", error);
      });
  };

  return (
    <>
      <div className="title">Dashboard Page</div>
    </>
  );
};

export default React.memo(Dashboard);
