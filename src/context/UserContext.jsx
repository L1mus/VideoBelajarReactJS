// src/context/UserContext.jsx
import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleAddUser = useCallback((newUser) => {
    const userWithOrders = { ...newUser, id: Date.now(), orders: [] };
    setUsers((prevUsers) => [...prevUsers, userWithOrders]);
  }, []);

  const handleLogin = useCallback(
    (loginData) => {
      const user = users.find(
        (u) => u.email === loginData.email && u.password === loginData.password
      );
      if (user) {
        setIsLoggedIn(true);
        setCurrentUser(user);
        return true;
      }
      return false;
    },
    [users]
  );

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  }, []);

  const handleUpdateUser = useCallback(
    (updatedData) => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === currentUser.id ? { ...user, ...updatedData } : user
        )
      );
      setCurrentUser((prev) => ({ ...prev, ...updatedData }));
    },
    [currentUser]
  );

  const handleDeleteUser = useCallback(
    (userId) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      handleLogout(); // handleLogout sudah di-memoize
    },
    [handleLogout]
  );

  const handleCreateOrder = useCallback(
    (courseDetails) => {
      if (!currentUser) return;

      const newOrder = {
        id: Date.now(),
        invoice: `INV/${Date.now()}`,
        date: new Date().toLocaleString("id-ID"),
        title: courseDetails.title,
        price: courseDetails.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        status: "Belum Bayar",
        image: courseDetails.image,
      };

      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.id === currentUser.id) {
            return { ...user, orders: [...user.orders, newOrder] };
          }
          return user;
        })
      );
      setCurrentUser((prev) => ({
        ...prev,
        orders: [...prev.orders, newOrder],
      }));
    },
    [currentUser]
  );

  const handleDeleteOrder = useCallback(
    (orderId) => {
      if (!currentUser) return;

      const updatedOrders = currentUser.orders.filter(
        (order) => order.id !== orderId
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) => {
          if (user.id === currentUser.id) {
            return { ...user, orders: updatedOrders };
          }
          return user;
        })
      );
      setCurrentUser((prev) => ({ ...prev, orders: updatedOrders }));
    },
    [currentUser]
  );

  const value = useMemo(
    () => ({
      isLoggedIn,
      currentUser,
      users,
      handleAddUser,
      handleLogin,
      handleLogout,
      handleUpdateUser,
      handleDeleteUser,
      handleCreateOrder,
      handleDeleteOrder,
    }),
    [
      isLoggedIn,
      currentUser,
      users,
      handleAddUser,
      handleLogin,
      handleLogout,
      handleUpdateUser,
      handleDeleteUser,
      handleCreateOrder,
      handleDeleteOrder,
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
