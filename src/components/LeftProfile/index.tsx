import userPhoto from "./../../assets/user.jpg"

const LeftProfile = () => {
  return (
    <div className="left-profile">
      <div className="identity-profile">
        <a href="#" className="identity-profile-link">
          <div>
            <img src={userPhoto} alt=""/>
          </div>

          <div className="identity-profile-link-text">
            Will Smith
          </div>
        </a>
        <p className="identity-profile-headline">
          Software Engineer
        </p>
      </div>
    </div>
  )
}

export default LeftProfile