const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');
const video5 = document.getElementById('projectVideo5');

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3];

videoList.forEach(function(video) {
  video.addEventListener("mouseover", function() {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function() {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

menu.addEventListener("click", function() {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function() {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

(function(){
  emailjs.init("fGB7WW84J4fUle8U8"); // Replace with your EmailJS public key 
})();

document.getElementById("sendBtn").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(!name || !email || !message){
    alert("Please fill out all fields before sending.");
    return;
  }

  emailjs.send("service_p8nczpb", "template_1h5ob6g", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(() => {
    alert("✅ Message sent successfully!");
  }, (error) => {
    alert("❌ Failed to send message. Please try again later.");
    console.error(error);
  });
});
