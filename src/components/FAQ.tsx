"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Apa itu Badal Umroh?",
    answer:
      "Badal Umroh adalah layanan untuk melaksanakan ibadah umroh atas nama orang lain yang telah meninggal dunia atau tidak mampu melaksanakannya sendiri karena alasan kesehatan atau usia lanjut.",
  },
  {
    question: "Siapa yang bisa dibadalkan umrohnya?",
    answer:
      "Badal Umroh dapat dilakukan untuk orang yang telah meninggal dunia atau orang yang masih hidup namun memiliki uzur syar'i yang menghalanginya untuk melaksanakan umroh sendiri, seperti sakit parah atau usia lanjut.",
  },
  {
    question: "Bagaimana cara memesan layanan Badal Umroh?",
    answer:
      "Anda dapat memesan layanan Badal Umroh dengan menghubungi kami melalui WhatsApp atau mengisi formulir pemesanan di website kami. Tim kami akan membantu Anda melalui proses pemesanan dan menjawab pertanyaan yang Anda miliki.",
  },
  {
    question: "Apakah saya akan menerima bukti pelaksanaan Badal Umroh?",
    answer:
      "Ya, kami akan memberikan bukti pelaksanaan Badal Umroh berupa sertifikat, dokumentasi foto, dan laporan tertulis. Untuk paket tertentu, kami juga menyediakan video dokumentasi.",
  },
  {
    question: "Berapa lama proses pelaksanaan Badal Umroh?",
    answer:
      "Proses pelaksanaan Badal Umroh biasanya memakan waktu sekitar 7-10 hari, tergantung pada jadwal keberangkatan dan paket yang Anda pilih. Kami akan memberikan informasi lebih detail mengenai jadwal pelaksanaan setelah pemesanan dikonfirmasi.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Pertanyaan <span className="text-primary-600">Umum</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-md focus:outline-none transition-all duration-300 hover:shadow-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-700">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-primary-50 rounded-lg shadow-md">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

