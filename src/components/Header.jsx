import logo from "/logo-name.svg"

const now = new Date()

function Header() {
    return (
      <header>
        <img src={logo} alt="" />
        {/* <h3>Result Unviversity</h3> */}
  
        <span>Время сейчас: {now.toLocaleTimeString()}</span>
      </header>
    )
}

export default Header