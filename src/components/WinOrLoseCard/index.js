import './index.css'

const WinOrLoseCard = props => {
  const {score, isScore12, playAgain} = props
  const onClickPlayAgain = () => {
    playAgain()
  }

  const loseCard = () => (
    <div className="win-card">
      <div className="won-text-card">
        <h1 className="won-heading">You Lose</h1>
        <p className="best-score">Score</p>
        <p className="score-12">{score}/12</p>
        <button
          type="button"
          className="play-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
      />
    </div>
  )

  const wonCard = () => (
    <div className="win-card">
      <div className="won-text-card">
        <h1 className="won-heading">You Won</h1>
        <p className="best-score">Best Score</p>
        <p className="score-12">12/12</p>
        <button
          type="button"
          className="play-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
      />
    </div>
  )

  return <div>{isScore12 ? wonCard() : loseCard()}</div>
}

export default WinOrLoseCard
