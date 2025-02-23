import Link from "next/link"
import { PhoneIcon as WhatsappIcon } from "lucide-react"

export default function CTA() {
  return (
    <section id="contact" className="py-20 bg-white text-green">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-600">Siap Membantu Badal Umroh dengan Amanah</h2>
        <p className="text-xl mb-8">Hubungi Kami Sekarang untuk Informasi Lebih Lanjut</p>
        <Link
          href="https://wa.me/your_whatsapp_number"
          className="inline-flex items-center bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-100 transition duration-300"
        >
          <WhatsappIcon className="w-6 h-6 mr-2" />
          Pesan Sekarang di WhatsApp
        </Link>
      </div>
    </section>
  )
}

