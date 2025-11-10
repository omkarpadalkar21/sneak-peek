import Link from "next/link"
import { Github, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-red-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-600">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-red-600">
                  Help
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-red-600">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-600">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-red-600">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow</h4>
            <div className="flex gap-4">
              <Link href="/" aria-label="Twitter" className="hover:text-red-600">
                <Twitter size={20} />
              </Link>
              <Link href="/" aria-label="Instagram" className="hover:text-red-600">
                <Instagram size={20} />
              </Link>
              <Link href="/" aria-label="GitHub" className="hover:text-red-600">
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-xs text-gray-400 text-center">© 2025 Peak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
