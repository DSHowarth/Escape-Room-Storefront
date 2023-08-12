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
