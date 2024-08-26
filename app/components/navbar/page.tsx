function NavBar() {
  return (
    <div className="flex flex-row justify-end sticky top-0 h-14 w-full bg-indigo-800">
      <div className="w-96 h-auto content-center">
        <ul className=" flex flex-row gap-6 font-mono text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
