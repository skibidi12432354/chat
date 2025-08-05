function sendMessage() {
  const user = document.getElementById("user").value;
  const messageInput = document.getElementById("message");
  const messageText = messageInput.value.trim();
  const chatBox = document.getElementById("chat-box");

  if (messageText === "") return;

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");
  messageDiv.classList.add(user === "User 1" ? "user1" : "user2");
  messageDiv.textContent = `${user}: ${messageText}`;

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;

  messageInput.value = "";
}
