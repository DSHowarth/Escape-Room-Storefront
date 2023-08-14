// cloudinary.v2.uploader
//   .upload(
//     "https://res.cloudinary.com/dfecvj7s4/video/upload/v1691872048/escape-room-video_hdaybz.mp4",
//     { resource_type: "video", public_id: "escape-room-video_hdaybz" }
//   )
//   .then((data) => {
//     console.log(data.playback_url);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// mobile menu icon and dropdown elements
const mobileMenuIcon = document.getElementById("mobileMenuIcon");
const mobileMenuDropdown = document.getElementById("mobileMenuDropdown");

// event listener to the mobile menu icon
mobileMenuIcon.addEventListener("click", () => {
  // toggle the 'clicked' class on the icon
  mobileMenuIcon.classList.toggle("clicked");
});
