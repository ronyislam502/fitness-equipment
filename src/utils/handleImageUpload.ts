const handleImageUpload = async (file: string | Blob) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await fetch(
      "https://api.imgbb.com/1/upload?expiration=600&key=eeeeebca5a1a3a8be12112a0352dc040",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export default handleImageUpload;
