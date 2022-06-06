export default function Header() {
  return (
    <nav className="p-4  md:p-8 tracking-widest">
      <div className="flex flex-row justify-between align-middle">
        <p className="font-bold uppercase ">
          amir asadi <span className="font-thin">&trade;</span>
        </p>
        <div className="capitalize">
          <ul className="flex flex-row gap-4  md:gap-7">
            <li>works</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
