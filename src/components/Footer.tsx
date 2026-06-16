export default function Footer() {
  return (
    <footer className="bg-[#1B4332] text-white pt-24 pb-8 rounded-t-[40px] -mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Value Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 border-b border-white/10 pb-12">
          {["Kepercayaan", "Petualangan", "Transparansi", "Kenyamanan", "Keamanan"].map((tag) => (
            <div key={tag} className="px-5 py-2 rounded-full border border-white/20 text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
              {tag}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 pr-8">
            <h3 className="font-heading font-bold text-2xl mb-4">NusaJelajah</h3>
            <p className="text-white/70 leading-relaxed max-w-sm">
              Membawa Anda lebih dekat dengan keindahan Nusantara melalui layanan perjalanan yang aman, nyaman, dan terpercaya.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white/90">Layanan</h4>
            <ul className="space-y-4">
              {["Paket Wisata", "Custom Trip", "Corporate Gathering", "Sewa Transportasi"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-white/90">Perusahaan</h4>
            <ul className="space-y-4">
              {["Tentang Kami", "Karir", "Syarat & Ketentuan", "Kebijakan Privasi"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} NusaJelajah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
