// Mengimpor semua ikon yang dibutuhkan
import iconBCA from "/assets/images/bca.png";
import iconBNI from "/assets/images/bni.png";
import iconBRI from "/assets/images/bri.png";
import iconMandiri from "/assets/images/mandiri.png";
import iconDana from "/assets/images/dana.png";
import iconOVO from "/assets/images/ovo.png";
import iconLinkAja from "/assets/images/linkaja.png";
import iconShopee from "/assets/images/shopee.png";

// Data untuk detail pembayaran
export const paymentDetails = {
  bca: {
    name: "Bank BCA",
    va: "11739 081234567890",
    icon: iconBCA,
    instructions: {
      atm: [
        "Masukkan kartu ATM dan PIN BCA Anda.",
        "Di menu utama, pilih 'Transaksi Lainnya'.",
        "Pilih 'Transfer', lalu pilih 'Ke BCA Virtual Account'.",
        "Masukkan nomor Virtual Account.",
        "Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih 'Benar'.",
        "Cek dan perhatikan konfirmasi pembayaran dari layar ATM. Jika sudah benar, pilih 'Ya', atau pilih 'Tidak' jika data di layar masih salah.",
        "Transaksi Anda sudah selesai. Pilih 'Tidak' untuk tidak melanjutkan transaksi lain.",
      ],
      mobile: [
        "Buka Aplikasi BCA Mobile.",
        "Pilih 'm-Transfer', kemudian pilih 'm-Transfer'.",
        "Pilih 'BCA Virtual Account'.",
        "Masukkan nomor Virtual Account, lalu pilih 'OK'.",
        "Pilih tombol 'Send' yang terletak di sudut kanan atas aplikasi untuk melakukan transfer.",
        "Klik 'OK' untuk melanjutkan pembayaran.",
        "Masukkan PIN Anda untuk mengotorisasi transaksi.",
        "Transaksi Anda telah selesai.",
      ],
      internet: [
        "Login ke KlikBCA Individual.",
        "Pilih 'Transfer', kemudian pilih 'Transfer ke BCA Virtual Account'.",
        "Masukkan nomor Virtual Account.",
        "Pilih 'Lanjutkan' untuk melanjutkan pembayaran.",
        "Masukkan 'Respon KeyBCA Appli 1', yang muncul pada Token BCA Anda, lalu klik 'Kirim'.",
        "Pembayaran telah selesai",
      ],
    },
  },
  bni: {
    name: "Bank BNI",
    va: "88739 081234567891",
    icon: iconBNI,
    instructions: {
      atm: ["Instruksi ATM BNI..."],
      mobile: ["Instruksi Mobile Banking BNI..."],
      internet: ["Instruksi Internet Banking BNI..."],
    },
  },
  bri: {
    name: "Bank BRI",
    va: "11739 081234567890",
    icon: iconBRI,
    instructions: {
      atm: [
        "Masukkan kartu ATM dan PIN BRI Anda.",
        "Di menu utama, pilih 'Transaksi Lainnya'.",
        "Pilih 'Transfer', lalu pilih 'Ke BRI Virtual Account'.",
        "Masukkan nomor Virtual Account.",
        "Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih 'Benar'.",
        "Cek dan perhatikan konfirmasi pembayaran dari layar ATM. Jika sudah benar, pilih 'Ya', atau pilih 'Tidak' jika data di layar masih salah.",
        "Transaksi Anda sudah selesai. Pilih 'Tidak' untuk tidak melanjutkan transaksi lain.",
      ],
      mobile: [
        "Buka Aplikasi BRI Mobile.",
        "Pilih 'm-Transfer', kemudian pilih 'm-Transfer'.",
        "Pilih 'BRI Virtual Account'.",
        "Masukkan nomor Virtual Account, lalu pilih 'OK'.",
        "Pilih tombol 'Send' yang terletak di sudut kanan atas aplikasi untuk melakukan transfer.",
        "Klik 'OK' untuk melanjutkan pembayaran.",
        "Masukkan PIN Anda untuk mengotorisasi transaksi.",
        "Transaksi Anda telah selesai.",
      ],
      internet: [
        "Login ke KlikBRI Individual.",
        "Pilih 'Transfer', kemudian pilih 'Transfer ke BRI Virtual Account'.",
        "Masukkan nomor Virtual Account.",
        "Pilih 'Lanjutkan' untuk melanjutkan pembayaran.",
        "Masukkan 'Respon KeyBRI Appli 1', yang muncul pada Token BRI Anda, lalu klik 'Kirim'.",
        "Pembayaran telah selesai",
      ],
    },
  },
  mandiri: {
    name: "Bank MANDIRI",
    va: "11739 081234567890",
    icon: iconMandiri,
    instructions: {
      atm: [
        "Masukkan kartu ATM dan PIN MANDIRI Anda.",
        "Di menu utama, pilih 'Transaksi Lainnya'.",
        "Pilih 'Transfer', lalu pilih 'Ke MANDIRI Virtual Account'.",
        "Masukkan nomor Virtual Account.",
        "Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih 'Benar'.",
        "Cek dan perhatikan konfirmasi pembayaran dari layar ATM. Jika sudah benar, pilih 'Ya', atau pilih 'Tidak' jika data di layar masih salah.",
        "Transaksi Anda sudah selesai. Pilih 'Tidak' untuk tidak melanjutkan transaksi lain.",
      ],
      mobile: [
        "Buka Aplikasi MANDIRI Mobile.",
        "Pilih 'm-Transfer', kemudian pilih 'm-Transfer'.",
        "Pilih 'MANDIRI Virtual Account'.",
        "Masukkan nomor Virtual Account, lalu pilih 'OK'.",
        "Pilih tombol 'Send' yang terletak di sudut kanan atas aplikasi untuk melakukan transfer.",
        "Klik 'OK' untuk melanjutkan pembayaran.",
        "Masukkan PIN Anda untuk mengotorisasi transaksi.",
        "Transaksi Anda telah selesai.",
      ],
      internet: [
        "Login ke KlikMANDIRI Individual.",
        "Pilih 'Transfer', kemudian pilih 'Transfer ke MANDIRI Virtual Account'.",
        "Masukkan nomor Virtual Account.",
        "Pilih 'Lanjutkan' untuk melanjutkan pembayaran.",
        "Masukkan 'Respon KeyMANDIRI Appli 1', yang muncul pada Token MANDIRI Anda, lalu klik 'Kirim'.",
        "Pembayaran telah selesai",
      ],
    },
  },
  dana: {
    name: "Dana",
    va: "081234567892",
    icon: iconDana,
    instructions: {
      ewallet: [
        "Buka aplikasi Dana Anda.",
        "Pilih 'Kirim & Bayar'.",
        "Masukkan nomor Virtual Account dan jumlah pembayaran.",
        "Konfirmasi pembayaran.",
      ],
    },
  },
  ovo: {
    name: "OVO",
    va: "081234567893",
    icon: iconOVO,
    instructions: {
      ewallet: [
        "Buka aplikasi OVO.",
        "Pilih 'Transfer'.",
        "Masukkan nomor Virtual Account dan jumlah.",
        "Konfirmasi dengan PIN OVO.",
      ],
    },
  },
  linkaja: {
    name: "LinkAja",
    va: "081234567893",
    icon: iconLinkAja,
    instructions: {
      ewallet: [
        "Buka aplikasi LinkAja.",
        "Pilih 'Transfer'.",
        "Masukkan nomor Virtual Account dan jumlah.",
        "Konfirmasi dengan PIN LinkAja.",
      ],
    },
  },
  shopee: {
    name: "Shopee Pay",
    va: "081234567893",
    icon: iconShopee,
    instructions: {
      ewallet: [
        "Buka aplikasi Shopeepay.",
        "Pilih 'Transfer'.",
        "Masukkan nomor Virtual Account dan jumlah.",
        "Konfirmasi dengan PIN Shopeepay.",
      ],
    },
  },
};
