function sendMessage() {
  const input = document.getElementById("message");
  const chatBox = document.getElementById("chat-box");
  const user = document.getElementById("user").value;
  const message = input.value.trim();

  if (message !== "") {
    const msgElem = document.createElement("div");
    msgElem.classList.add("message");

    if (user === "User 1") {
      msgElem.classList.add("user1");
      msgElem.textContent = "User 1: " + message;
    } else {
      msgElem.classList.add("user2");
      msgElem.textContent = "User 2: " + message;
    }

    chatBox.appendChild(msgElem);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = "";
  }
}
