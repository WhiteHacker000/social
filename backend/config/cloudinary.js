import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (fileBuffer, mimetype) => {
    try {
        return new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
                {
                    resource_type: 'auto',
                    folder: 'social-media'
                },
                (error, result) => {
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        reject(error);
                    } else {
                        console.log('Cloudinary upload success:', result.secure_url);
                        resolve(result.secure_url);
                    }
                }
            );
            uploadStream.end(fileBuffer);
        });
    } catch (error) {
        console.error('uploadOnCloudinary error:', error);
        throw error;
    }
}

export default uploadOnCloudinary