import {Link} from "react-router-dom";

const NotFoundPage = () => {
  return (
    <p>This page does not exist. Go <Link to="/">home</Link> </p>
  )
}

export default NotFoundPage