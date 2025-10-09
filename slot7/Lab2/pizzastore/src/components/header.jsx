export default function Header() {
  return (
    <header className="header">
      <div className="logo">Pizza House</div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search" />
        <button >🔍</button>
      </div>
    </header>
  );
}