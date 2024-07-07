import "./styles/Footer.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <span>
        🦉 From{" "}
        <a
          href="https://t.me/netcrawler_ish"
          style={{ textDecoration: "underline", color: "yellow" }}
        >
          Netcrawler
        </a>{" "}
        {date}
      </span>
    </footer>
  );
}

export default Footer;
