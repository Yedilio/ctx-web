import citixLogo from './../../assets/citix-logo.svg'

const RightBlock = () => {
  return (
    <div className="right-block">
      <div className="right-block-title">
        Jobs in
        <a href="https://hh.kz/employer/4434277" target="_blank" className="right-block-title-link">
          <img src={citixLogo} alt=""/>
        </a>
      </div>
      <div className="right-block-items">
        <ul>
          <li className="right-block-item">
            <a href="https://hh.kz/vacancy/85952820" target="_blank">
              <div className="right-block-item-body">
                <span>Системный аналитик</span>
                <span>Зарплата не указана</span>
              </div>
            </a>
          </li>
          <li className="right-block-item">
            <a href="https://hh.kz/vacancy/85939549">
              <div className="right-block-item-body">
                <span>Бизнес-аналитик</span>
                <span>Зарплата не указана</span>
              </div>
            </a>
          </li>
          <li className="right-block-item">
            <a href="https://hh.kz/vacancy/85220739" target="_blank">
              <div className="right-block-item-body">
                <span>QA инженер</span>
                <span>Зарплата не указана</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      {/*<div className="right-block-title">*/}
      {/*  View all recommendations*/}
      {/*</div>*/}
    </div>
  )
}

export default RightBlock