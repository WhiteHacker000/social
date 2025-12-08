import multer from "multer"

// Use memory storage instead of disk - more reliable on Render and serverless environments
const storage = multer.memoryStorage()

export const upload = multer({
    storage,
    limits: {
        fileSize: 50 * 1024 * 1024 // 50MB limit
    }
})