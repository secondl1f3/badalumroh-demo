import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function BadalUmrohInfo() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Apa Itu <span className="text-gradient">Badal Umroh?</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
                src="/tawaf.jpg"
                alt="Badal Umroh Illustration"
                width={500}
                height={400}
                className="w-full h-[400px] rounded-lg shadow-lg object-cover object-buttom"
            />

          </div>
          <div className="md:w-1/2">
            <p className="text-gray-600 text-lg mb-6">
              Badal Umroh adalah layanan untuk melaksanakan ibadah umroh atas nama orang lain yang telah meninggal dunia
              atau tidak mampu melaksanakannya sendiri karena alasan kesehatan atau usia lanjut. Layanan ini didasarkan
              pada ajaran Islam dan merupakan bentuk ibadah yang mulia.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-700">Membantu menunaikan kewajiban ibadah orang lain</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-700">Mendapatkan pahala yang berlipat ganda</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-2 flex-shrink-0" />
                <span className="text-gray-700">Meneruskan amal jariyah bagi yang telah meninggal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

