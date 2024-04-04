import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

class EmojiGame extends Component {
  state = {
    score: 0,
    isScore12: false,
    lossGame: false,
    clickedList: [],
    scoresList: [],
    topScore: 0,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  matchedEmoji = id => {
    const {emojisList} = this.props
    const {clickedList} = this.state
    const isThereId = clickedList.includes(id)

    if (isThereId === false) {
      this.setState(prevState => ({score: prevState.score + 1}))
      clickedList.push(id)

      if (clickedList.length === emojisList.length) {
        this.setState({isScore12: true})
      }
    } else {
      this.setState({lossGame: true})
    }
  }

  playAgain = () => {
    const {score, scoresList} = this.state

    scoresList.push(score)

    scoresList.sort()

    const result = scoresList[scoresList.length - 1]

    this.setState({
      score: 0,
      isScore12: false,
      lossGame: false,
      topScore: result,
      clickedList: [],
    })
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojisList()
    const {score, isScore12, lossGame, topScore} = this.state
    return (
      <div className="main-container">
        <NavBar
          score={score}
          topScore={topScore}
          isScore12={isScore12}
          lossGame={lossGame}
        />
        {lossGame || isScore12 ? (
          <WinOrLoseCard
            score={score}
            isScore12={isScore12}
            playAgain={this.playAgain}
          />
        ) : (
          <ul className="un-ordered-list">
            {shuffledEmojisList.map(eachItem => (
              <EmojiCard
                emojiDetails={eachItem}
                key={eachItem.id}
                matchedEmoji={this.matchedEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
