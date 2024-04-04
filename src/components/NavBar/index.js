import './index.css'

const NavBar = props => {
  const {score, topScore, isScore12, lossGame} = props
  return (
    <div className="nav-bar-container">
      <div className="logo-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>

      {lossGame === false && isScore12 === false ? (
        <div className="score-card">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {topScore}</p>
        </div>
      ) : (
        ' '
      )}
    </div>
  )
}

export default NavBar
