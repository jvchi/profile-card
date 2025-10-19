const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);




































let isFollowing = false;
const followButton = document.getElementById('followBtn');



  const img = document.getElementById('img');
  const icon = document.getElementById('myIcon');
  const checkmark = document.getElementById('checkmark');

  

  followButton.addEventListener("click", ()=>{

        isFollowing = !isFollowing;
        
        followButton
        .innerHTML = isFollowing? "Following" : "Follow +";
        followButton.style.backgroundColor = isFollowing? '#CCCCCC' : 'rgb(144, 230, 144)';
        followButton.style.color = isFollowing? "white" : "rgb(7, 164, 7)";
    
    });
  
  icon.addEventListener('ready', () => {
      
    img.addEventListener('mouseenter', ()=>{
      icon.playerInstance.play();
    })
    img.addEventListener('mouseleave', ()=>{
      icon.playerInstance.stop();
    })
  });