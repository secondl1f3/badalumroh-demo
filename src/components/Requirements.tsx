import { Shield, Award } from "lucide-react"

export default function Requirements() {
  const requirements = [
    "Orang yang dibadalkan telah meninggal dunia atau memiliki uzur syar'i",
    "Badal Umroh dilakukan oleh seorang Muslim yang sudah baligh dan berakal",
    "Niat ikhlas untuk melaksanakan Badal Umroh",
    "Izin dari keluarga atau ahli waris orang yang dibadalkan",
  ]

  const benefits = [
    "Membantu menunaikan kewajiban ibadah orang lain",
    "Mendapatkan pahala yang berlipat ganda",
    "Meneruskan amal jariyah bagi yang telah meninggal",
    "Mempererat tali silaturahmi antar keluarga",
  ]

  return (
    <section id="requirements" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Syarat & Keutamaan Badal Umroh</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 mr-4 text-primary" />
              <h3 className="text-2xl font-semibold text-primary">Syarat Sah Badal Umroh</h3>
            </div>
            <ul className="space-y-4">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start text-black-700">
                  <span className="inline-block w-6 h-6 bg-secondary text-black rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 mr-4 text-primary" />
              <h3 className="text-2xl font-semibold text-primary">Keutamaan Badal Umroh</h3>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <span className="inline-block w-6 h-6 bg-secondary text-black rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <blockquote className="mt-12 p-6 bg-white rounded-lg shadow-lg text-center">
          <p className="text-lg italic mb-4 text-gray-700">
            "Barangsiapa yang melakukan haji untuk orang tuanya atau melunasi hutang orang tuanya, maka ia telah
            membebaskan orang tuanya dan ia sendiri mendapat pahala yang sempurna."
          </p>
          <footer className="text-primary font-semibold">- Hadits Riwayat Abu Dawud</footer>
        </blockquote>
      </div>
    </section>
  )
}

