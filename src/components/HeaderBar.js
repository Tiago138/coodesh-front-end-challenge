function HeaderBar() {
  console.log("rendered headerbar");

  return (
    <header className="headerBar">
      <div className="headerLogo">
        <img src={require("../images/image-regular.svg").default} alt="Logo" />
        <h1>Company</h1>
      </div>
      <div className="headerUserImage">
        <img src={require("../images/user-solid.svg").default} alt="User" />
      </div>
    </header>
  );
}

export default HeaderBar;
