"use client"

import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ahmad Saputra",
    image: "/testimonial-1.jpg",
    text: "Alhamdulillah, saya sangat puas dengan layanan Badal Umroh dari Baab Makkah. Proses pemesanan mudah dan laporan yang diberikan sangat detail.",
  },
  {
    name: "Siti Aminah",
    image: "/testimonial-2.jpg",
    text: "Terima kasih Baab Makkah telah membantu saya menunaikan badal umroh untuk almarhum ayah saya. Pelayanannya sangat profesional dan amanah.",
  },
  {
    name: "Hasan Basri",
    image: "/testimonial-3.jpg",
    text: "Saya merekomendasikan layanan Badal Umroh Baab Makkah kepada siapa saja yang ingin membadalkan umroh keluarganya. Pelaksanaannya sangat sesuai dengan syariat dan memberikan ketenangan hati.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Testimoni <span className="text-primary-600">Pelanggan</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary-50 rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <Quote className="w-8 h-8 text-primary-500 mb-4" />
              <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <h3 className="text-xl font-semibold text-primary-600">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

