import { createContext, useState, useCallback, useMemo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = useCallback(async (newUser) => {
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!response.ok) throw new Error("Gagal mendaftarkan pengguna baru.");
      return true;
    } catch (error) {
      console.error("Error registering user:", error);
      return false;
    }
  }, []);

  const handleLogin = useCallback(async (loginData) => {
    try {
      const response = await fetch(
        `http://localhost:3001/users?email=${loginData.email}`
      );
      if (!response.ok) throw new Error("Gagal menghubungi server.");

      const users = await response.json();
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
        const response = await fetch(
          `http://localhost:3001/users/${currentUser.id}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
          }
        );
        if (!response.ok) throw new Error("Gagal memperbarui profil.");
        const updatedUser = await response.json();
        setCurrentUser(updatedUser);
        alert("Profil berhasil diperbarui!");
      } catch (error) {
        console.error("Error updating user:", error);
        alert("Gagal memperbarui profil.");
      }
    },
    [currentUser]
  );

  const handleDeleteUser = useCallback(
    async (userId) => {
      if (!window.confirm("Apakah Anda yakin ingin menghapus akun ini?"))
        return;
      try {
        await fetch(`http://localhost:3001/users/${userId}`, {
          method: "DELETE",
        });
        handleLogout();
        alert("Akun berhasil dihapus.");
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("Gagal menghapus akun.");
      }
    },
    [handleLogout]
  );

  const handleCreateOrder = useCallback(
    async (courseDetails) => {
      if (!currentUser) return;
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
        const response = await fetch("http://localhost:3001/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newOrder),
        });
        if (!response.ok)
          throw new Error("Gagal membuat pesanan baru di server.");
      } catch (error) {
        console.error("Error creating order:", error);
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
        const response = await fetch(
          `http://localhost:3001/orders/${orderId}`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Gagal membatalkan pesanan di server.");
        }
        alert("Pesanan berhasil dibatalkan.");
        return true;
      } catch (error) {
        console.error("Error deleting order:", error);
        alert("Gagal membatalkan pesanan. Silakan coba lagi.");
        return false;
      }
    },
    [currentUser]
  );

  const handlePayment = useCallback(
    async (orderId, paymentStatus) => {
      if (!currentUser || !orderId) return false;
      try {
        const response = await fetch(
          `http://localhost:3001/orders/${orderId}`,
          {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: paymentStatus }),
          }
        );
        if (!response.ok)
          throw new Error("Gagal memperbarui status pembayaran.");

        const updatedOrder = await response.json();

        if (paymentStatus === "Berhasil") {
          const courseResponse = await fetch(
            `http://localhost:3001/courses/${updatedOrder.courseId}`
          );
          if (!courseResponse.ok)
            throw new Error("Gagal mengambil detail kursus.");
          const courseData = await courseResponse.json();

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

          await fetch("http://localhost:3001/myCourses", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMyCourse),
          });
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
