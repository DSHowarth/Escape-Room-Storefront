const fileInput = document.querySelector("#background-video");

fileInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];

  // Use Cloudinary's upload API to upload the file
  const response = await fetch("/upload", {
    method: "POST",
    body: file,
  });

  if (response.ok) {
  } else {
  }
});
