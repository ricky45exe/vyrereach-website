import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tighter">
            Vyre<span className="text-gradient">Reach</span>
          </Link>

          <div className="flex items-center gap-8 text-white/40 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-white transition-colors">Dribbble</Link>
          </div>

          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} VyreReach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
