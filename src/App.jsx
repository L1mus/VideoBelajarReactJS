// 1. Impor komponen Button yang sudah kita buat
import Button from "./components/Button/Button";

function App() {
  // 2. Buat fungsi untuk menangani klik
  const handleSimpan = () => {
    alert("Data berhasil disimpan!");
  };

  const handleHapus = () => {
    confirm("Apakah Anda yakin ingin menghapus data ini?");
  };

  return (
    <>
      // Gunakan div untuk menata letak di tengah layar
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
        <h1 className="text-2xl font-bold mb-4">
          Contoh Penggunaan Komponen Button
        </h1>

        {/* 3. Gunakan komponen Button seperti tag HTML */}
        <Button onClick={handleSimpan} variant="primary">
          Simpan Perubahan
        </Button>

        <Button onClick={handleHapus} variant="tetrinary">
          Hapus Akun
        </Button>

        <Button onClick={() => alert("Membatalkan aksi...")} variant="primary1">
          Batal
        </Button>
      </div>
    </>
  );
}

export default App;
