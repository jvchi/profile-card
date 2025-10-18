const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const now = Date.now();
  const readable = new Date(now).toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  timeElement.textContent = readable;
}

updateTime();
setInterval(updateTime, 1000);