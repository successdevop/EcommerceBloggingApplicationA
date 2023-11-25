import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function GlobalButton({
  href,
  className,
  text = "Subscribe",
  children,
  paddingTB = 1.6,
  paddingLR = 4.8,
  fontSize = 1.8,
  color = "#232536",
  onclick,
}) {
  const linkStyles = {
    borderRadius: "3px",
    border: "1px solid transparent",
    padding: `${paddingTB}rem ${paddingLR}rem`,
    fontSize: `${fontSize}rem`,
    fontWeight: 700,
    fontFamily: "inherit",
    cursor: "pointer",
    transition: "all 0.25s",
    color: color,
  };

  return (
    <Link
      style={linkStyles}
      className={className ?? ""}
      to={href}
      onClick={onclick}
    >
      <span>{text}</span>
      {children}
    </Link>
  );
}

GlobalButton.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onclick: PropTypes.func,
  children: PropTypes.node,
  paddingTB: PropTypes.number,
  paddingLR: PropTypes.number,
  fontSize: PropTypes.number,
};
export default GlobalButton;
