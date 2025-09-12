const cursorFollower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
  if (window.scrollY > window.innerHeight + (window.innerHeight / 2)) {
    cursorFollower.style.opacity = 0;
  } else {
    cursorFollower.style.opacity = 1;
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }
});