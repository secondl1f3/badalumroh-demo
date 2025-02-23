import { CheckCircle, CreditCard, FileText, ChurchIcon as Mosque, Video } from "lucide-react"

const steps = [
  {
    icon: CheckCircle,
    title: "Pilih paket badal umroh",
    description: "Tentukan paket yang sesuai dengan kebutuhan Anda",
  },
  {
    icon: FileText,
    title: "Kirim data jamaah",
    description: "Berikan informasi lengkap tentang orang yang akan dibadalkan",
  },
  { icon: CreditCard, title: "Pembayaran & konfirmasi", description: "Lakukan pembayaran dan konfirmasi pesanan Anda" },
  {
    icon: Mosque,
    title: "Pelaksanaan badal umroh",
    description: "Tim kami akan melaksanakan badal umroh sesuai syariat",
  },
  {
    icon: Video,
    title: "Dokumentasi dan laporan",
    description: "Terima laporan lengkap dan dokumentasi setelah ibadah selesai",
  },
]

export default function Procedure() {
  return (
    <section id="procedure" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Prosedur Pemesanan</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <step.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-700">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

