import Chip from "../Button/Chip";

const statusStyles = {
  Berhasil: { variant: "success", style: "light" },
  Gagal: { variant: "error", style: "light" },
  "Belum Bayar": { variant: "warning", style: "light" },
  Menunggu: { variant: "info", style: "light" },
};

function OrderCard({ data }) {
  const { invoice, date, title, price, status, image } = data;
  const chipProps = statusStyles[status] || {
    variant: "primary",
    style: "light",
  };

  return (
    <div className="bg-other-primary-background border border-other-border rounded-lg shadow-sm">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2 p-4">
        <div className="flex items-center gap-4">
          <p className="text-sm">
            No. Invoice:{" "}
            <a href="#" className="font-bold text-info-default underline">
              {invoice}
            </a>
          </p>
          <p className="text-sm text-text-dark-secondary">
            Waktu Pembayaran: {date}
          </p>
        </div>
        <Chip variant={chipProps.variant} style={chipProps.style}>
          {status}
        </Chip>
      </div>

      {/* Body */}
      <div className="flex items-center p-4 border-t border-b border-other-border">
        <img
          src={image}
          alt={title}
          className="w-13 h-13 object-cover rounded-md"
        />
        <div className="flex-grow ml-4">
          <h3 className="text-lg font-medium text-text-dark-primary leading-tight">
            {title}
          </h3>
        </div>

        <div className="border-l border-other-border h-12 mx-6 hidden md:block"></div>

        <div className="text-right flex-shrink-0 w-32">
          <p className="text-sm text-text-dark-secondary text-left">Harga</p>
          <p className="font-bold text-text-dark-primary text-lg text-left">
            Rp {price}
          </p>
        </div>
      </div>

      {/* Footer */}

      <div className="flex flex-grow justify-between items-center p-4 border-t border-b border-other-border">
        <p className="text-sm font-medium text-text-dark-primary leading-tight">
          Total Pembayaran
        </p>
        <p className="text-lg font-bold text-green-600">Rp {price}</p>
      </div>
    </div>
  );
}

export default OrderCard;
