import { Check } from "lucide-react"

const packages = [
  {
    name: "Paket Standar",
    price: "Rp 15.000.000",
    features: ["Badal Umroh sesuai syariat", "Sertifikat Badal Umroh", "Dokumentasi foto", "Laporan pelaksanaan"],
  },
  {
    name: "Paket Premium",
    price: "Rp 20.000.000",
    features: ["Semua fitur Paket Standar", "Video dokumentasi", "Doa khusus di Multazam", "Laporan detail per ritual"],
  },
  {
    name: "Paket VIP",
    price: "Rp 25.000.000",
    features: [
      "Semua fitur Paket Premium",
      "Ziarah ke tempat bersejarah",
      "Tawaf dan Sa'i tambahan",
      "Konsultasi dengan ulama",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Paket dan <span className="text-primary-600">Harga</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-2xl font-semibold mb-4 text-primary-600">{pkg.name}</h3>
              <p className="text-4xl font-bold text-gray-800 mb-6">{pkg.price}</p>
              <ul className="text-gray-600 mb-8 space-y-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 mr-2 text-primary-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary-500 text-white py-3 px-4 rounded-full font-semibold hover:bg-primary-600 transition duration-300">
                Pilih Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

