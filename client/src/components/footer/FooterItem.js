import { Link } from "react-router-dom";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
function FooterItem({ title, path }) {
  return (
    <div className="footer_item">
      <Link to={path} className="footer_link">
        <ArrowRightIcon className="footer_icon" />
        {title}
      </Link>
    </div>
  );
}

export default FooterItem;
