import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-20 pb-32">
      <div className="pattern-bg absolute inset-0 opacity-50" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Badal Umroh dengan <span className="text-primary-600">Amanah dan Profesional</span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 md:text-2xl">
            Titipkan ibadah umroh bagi yang telah tiada atau tidak mampu melaksanakan sendiri melalui layanan
            terpercaya.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="https://wa.me/your_whatsapp_number"
              className="inline-flex items-center rounded-full bg-primary-500 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-primary-600"
            >
              Pesan Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <button className="inline-flex items-center rounded-full border-2 border-primary-500 px-8 py-3 text-lg font-semibold text-primary-600 transition-colors hover:bg-primary-50">
              Pelajari Lebih Lanjut
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 rounded-2xl bg-white p-8 shadow-lg md:grid-cols-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">500+</p>
              <p className="text-sm text-gray-600">Jamaah Terlayani</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">100%</p>
              <p className="text-sm text-gray-600">Amanah</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">10+</p>
              <p className="text-sm text-gray-600">Tahun Pengalaman</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-600">24/7</p>
              <p className="text-sm text-gray-600">Dukungan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

