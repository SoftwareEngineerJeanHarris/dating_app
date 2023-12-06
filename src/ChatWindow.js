import React from 'react';

const ChatWindow = ({ match }) => {
  // Extract userId from the URL parameter
  const userId = match.params.userId;

  return (
    <div>
      <h1>Chat with User</h1>
      <p>Start chatting with user with ID: {userId}</p>
      {/* Add content for the chat window */}
    </div>
  );
};

export default ChatWindow;
