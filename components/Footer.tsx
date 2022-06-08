export default function Footer() {
  return (
    <footer className="flex justify-between my-6">
      <p>&copy;{new Date().getFullYear()} - IRAN</p>
      <a href="#">backToTop &uarr;</a>
    </footer>
  );
}
