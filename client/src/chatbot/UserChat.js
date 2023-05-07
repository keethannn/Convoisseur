

function UserChat({ message }) {
    return (
      <div className='chat-message user-message'>
        <div className='text-white'>{message}</div>
      </div>
    )
}

export default UserChat