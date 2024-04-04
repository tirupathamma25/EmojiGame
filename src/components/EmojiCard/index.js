import './index.css'

const EmojiCard = props => {
  const {emojiDetails, matchedEmoji} = props
  const {emojiName, emojiUrl, id} = emojiDetails

  const onClickEmojiCard = () => {
    matchedEmoji(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="button" onClick={onClickEmojiCard}>
        <img src={emojiUrl} alt={emojiName} className="image" />
      </button>
    </li>
  )
}
export default EmojiCard
