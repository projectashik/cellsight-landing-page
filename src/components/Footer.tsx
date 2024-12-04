import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              CellSight
            </Link>
            <p className="mt-2 text-sm text-secondary">
              Revolutionizing microscopic analysis
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-accent transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-accent transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-accent transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-secondary">
          © {new Date().getFullYear()} CellSight. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

