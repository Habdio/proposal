document.getElementById('replyForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const message = document.getElementById('reply').value.trim();

  if (message === '') {
    alert('Please write something 💌');
    return;
  }

  // Optional: Store message in localStorage (not sent to server)
  localStorage.setItem('herReply', message);

  // Redirect to Snapchat (replace with your real Snapchat username)
  const snapchatUsername = "joshua20060404";
  const snapchatLink = `https://www.snapchat.com/add/${snapchatUsername}`;
  window.open(snapchatLink, '_blank');
});
