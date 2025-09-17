import { createContext, useState, useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import api from "../services/API";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = useCallback(async (newUser) => {
    try {
      await api.addUser(newUser);
      return true;
    } catch (error) {
      console.error("Error registering user:", error);
      return false;
    }
  }, []);

  const handleLogin = useCallback(async (loginData) => {
    try {
      const users = await api.getUserByEmail(loginData.email);
      const user = users.find((u) => u.password === loginData.password);

      if (user) {
        setIsLoggedIn(true);
        setCurrentUser(user);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error logging in:", error);
      return false;
    }
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  }, []);

  const handleUpdateUser = useCallback(
    async (updatedData) => {
      if (!currentUser) return;
      try {
        const updatedUser = await api.updateUser(currentUser.id, updatedData);
        setCurrentUser(updatedUser);
        toast.success("Profil berhasil diperbarui!");
      } catch (error) {
        console.error("Error updating user:", error);
        toast.error("Gagal memperbarui profil.");
      }
    },
    [currentUser]
  );

  const handleDeleteUser = useCallback(
    async (userId) => {
      if (!window.confirm("Apakah Anda yakin ingin menghapus akun ini?"))
        return;
      try {
        await api.deleteUser(userId);
        handleLogout();
        toast.success("Akun berhasil dihapus.");
      } catch (error) {
        console.error("Error deleting user:", error);
        toast.error("Gagal menghapus akun.");
      }
    },
    [handleLogout]
  );

  const handleCreateOrder = useCallback(
    async (courseDetails) => {
      if (!currentUser) return null;
      const newOrder = {
        userId: currentUser.id,
        courseId: courseDetails.id,
        invoice: `INV/${Date.now()}`,
        date: new Date().toLocaleString("id-ID"),
        title: courseDetails.title,
        price: courseDetails.price
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, "."),
        status: "Belum Bayar",
        image: courseDetails.image,
      };
      try {
        const createdOrder = await api.createOrder(newOrder);
        return createdOrder;
      } catch (error) {
        console.error("Error creating order:", error);

        toast.error("Gagal membuat pesanan.");
        return null;
      }
    },
    [currentUser]
  );

  const handleDeleteOrder = useCallback(
    async (orderId) => {
      if (
        !currentUser ||
        !window.confirm("Apakah Anda yakin ingin membatalkan pesanan ini?")
      ) {
        return false;
      }
      try {
        await api.deleteOrder(orderId);
        toast.success("Pesanan berhasil dibatalkan.");
        return true;
      } catch (error) {
        console.error("Error deleting order:", error);
        toast.error("Gagal membatalkan pesanan. Silakan coba lagi.");
        return false;
      }
    },
    [currentUser]
  );

  const handlePayment = useCallback(
    async (orderId, paymentStatus) => {
      if (!currentUser || !orderId) return false;
      try {
        const updatedOrder = await api.updateOrderStatus(
          orderId,
          paymentStatus
        );

        if (paymentStatus === "Berhasil") {
          const courseData = await api.getCourseDetails(updatedOrder.courseId);

          const newMyCourse = {
            userId: currentUser.id,
            id: courseData.id,
            status: "Sedang Berjalan",
            progressModules: 0,
            totalModules: 12,
            image: courseData.image,
            title: courseData.title,
            description: courseData.description,
            author: courseData.author,
            moduleCount: 12,
            duration: 360,
            progressPercent: 0,
          };

          await api.addCourseToMyCourses(newMyCourse);
        }
        return true;
      } catch (error) {
        console.error("Error processing payment:", error);
        alert("Terjadi kesalahan saat memproses pembayaran.");
        return false;
      }
    },
    [currentUser]
  );

  const value = useMemo(
    () => ({
      isLoggedIn,
      currentUser,
      handleAddUser,
      handleLogin,
      handleLogout,
      handleUpdateUser,
      handleDeleteUser,
      handleCreateOrder,
      handleDeleteOrder,
      handlePayment,
    }),
    [
      isLoggedIn,
      currentUser,
      handleAddUser,
      handleLogin,
      handleLogout,
      handleUpdateUser,
      handleDeleteUser,
      handleCreateOrder,
      handleDeleteOrder,
      handlePayment,
    ]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
