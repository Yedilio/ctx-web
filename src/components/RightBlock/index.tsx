const RightBlock = () => {
  return (
    <div className="right-block">
      <div className="right-block-title">
        Jobs
      </div>
      <div className="right-block-items">
        <ul>
          <li className="right-block-item">
            <a href=""><img src="" alt=""/></a>
            <div className="right-block-item-body">
              <span>Системный аналитик</span>
              <span>Зарплата не указана</span>
            </div>
          </li>
          <li className="right-block-item">
            <a href=""><img src="" alt=""/></a>
            <div className="right-block-item-body">
              <span>Бизнес-аналитик</span>
              <span>Зарплата не указана</span>
            </div>
          </li>
          <li className="right-block-item">
            <a href=""><img src="" alt=""/></a>
            <div className="right-block-item-body">
              <span>QA инженер</span>
              <span>Зарплата не указана</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="right-block-title">
        View all recommendations
      </div>
    </div>
  )
}

export default RightBlock