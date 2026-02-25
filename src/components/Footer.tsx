export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-industrial-black text-center">
      <p className="text-white/40 text-sm">
        © {new Date().getFullYear()} Juita Baidya. Built with <span className="text-electric-yellow">Engineering Intelligence</span>.
      </p>
    </footer>
  );
}
