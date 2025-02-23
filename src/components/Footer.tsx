import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
      <footer className="bg-gradient-to-b from-white to-primary-50 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center md:flex-row md:justify-center md:space-x-12">
            <div className="w-full md:w-auto mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Baab Makkah</h3>
              <p className="text-gray-600">Layanan Badal Umroh Terpercaya</p>
            </div>
            <div className="w-full md:w-auto mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Kontak</h3>
              <p className="text-gray-600">WhatsApp: +62 123 4567 8900</p>
              <p className="text-gray-600">Email: info@baabmakkah.com</p>
            </div>
            <div className="w-full md:w-auto">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Ikuti Kami</h3>
              <div className="flex justify-center space-x-4">
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition duration-300">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition duration-300">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-primary-500 transition duration-300">
                  <Twitter className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-500">&copy; {new Date().getFullYear()} Baab Makkah. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}
