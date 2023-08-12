// const fileInput = document.querySelector("#player");

// fileInput.addEventListener("change", async (event) => {
//   const file = event.target.files[0];

//   // Use Cloudinary's upload API to upload the file
//   const response = await fetch("/upload", {
//     method: "POST",
//     body: file,
//   });

//   if (response.ok) {
//   } else {
//   }
// });

cloudinary.v2.uploader
  .upload(
    "https://res.cloudinary.com/dfecvj7s4/video/upload/v1691872048/escape-room-video_hdaybz.mp4",
    { resource_type: "video", public_id: "video_upload_example" }
  )
  .then((data) => {
    console.log(data.playback_url);
  })
  .catch((err) => {
    console.error(err);
  });
