import LeftProfile from "../LeftProfile";
import Posts from "../Posts";
import RightBlock from "../RightBlock";

const Content = () => {
  return <div className="content-body">
    <LeftProfile/>
    <Posts/>
    <RightBlock/>
  </div>
}

export default Content