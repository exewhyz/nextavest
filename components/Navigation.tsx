import Link from 'next/link';
import { Button } from './ui/button';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-[#0a2540]">
              NextAvest
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}