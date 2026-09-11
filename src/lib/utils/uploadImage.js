/**
 * Direct image upload to ImgBB API using client key
 */
export async function uploadToImgBB(file) {
  const apiKey =
    process.env.NEXT_PUBLIC_IMGBB_API_KEY || "ffd579deb8791a87fcae0777839ddf1c";

  if (!file) {
    throw new Error("No image file provided for upload.");
  }

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data?.error?.message || `ImgBB upload failed (${res.status})`);
    }

    return data.data.display_url || data.data.url;
  } catch (error) {
    console.error("[IMGBB] Upload error:", error);
    throw error;
  }
}
