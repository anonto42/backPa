import { v2 as cloudinary} from "cloudinary";
import fs from "fs";

          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const cloudinaryupload = async (fileUrl)=>{
    try {
        if(!fileUrl) return null;
        // upload the file to the cloudinary
        const res = await cloudinary.uploader.upload(fileUrl,{
            resource_type:"auto"
        })
        // print the res
        console.log(res.url,"this is your url and it wass uploaded successfully");
        // return the file info
        return res;
    } catch (error) {
        fs.unlinkSync(fileUrl)
        return null; 
    }
}

export {cloudinaryupload}