import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">UAE Setup</h3>
            <p className="text-gray-400">Expert business setup assistance in UAE</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="text-gray-400 space-y-2">
              <li><Link href="/services/mainland" className="hover:text-white">Mainland</Link></li>
              <li><Link href="/services/freezone" className="hover:text-white">Free Zone</Link></li>
              <li><Link href="/services/offshore" className="hover:text-white">Offshore</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: hello@uaesetup.ae<br />
              Phone: +971 50 123 4567<br />
              WhatsApp: <a href="https://wa.me/971503947208" className="hover:text-white">+971 50 394 7208</a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 UAE Setup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
