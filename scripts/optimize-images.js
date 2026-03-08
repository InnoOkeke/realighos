import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target directory containing the project images
const DIRECTORY_PATH = path.join(__dirname, '../src/assets/projects');

// Image extensions to convert
const TARGET_EXTENSIONS = ['.jpg', '.jpeg', '.png'];

/**
 * Recursively find all files in a directory
 * @param {string} dir 
 * @param {string[]} fileList 
 * @returns {string[]}
 */
const getAllFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });

    return fileList;
};

/**
 * Main optimization function
 */
const optimizeImages = async () => {
    console.log(`Scanning project directory: ${DIRECTORY_PATH}...\n`);

    if (!fs.existsSync(DIRECTORY_PATH)) {
        console.error('Directory does not exist!');
        return;
    }

    const files = getAllFiles(DIRECTORY_PATH);
    const imagesToProcess = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return TARGET_EXTENSIONS.includes(ext);
    });

    if (imagesToProcess.length === 0) {
        console.log('No JPG or PNG images found to optimize. You\'re good to go!');
        return;
    }

    console.log(`Found ${imagesToProcess.length} images to compress. Processing...`);

    let successCount = 0;
    let failedCount = 0;

    for (const filePath of imagesToProcess) {
        const ext = path.extname(filePath);
        const webpPath = filePath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
        const fileName = path.basename(filePath);

        try {
            const originalStats = fs.statSync(filePath);

            // Convert to highly optimized WebP
            // .rotate() automatically reads the orientaton EXIF metadata and rotates the image correctly before metadata is stripped
            await sharp(filePath)
                .rotate()
                .resize({ width: 1920, withoutEnlargement: true }) // Max width 1920px
                .webp({ quality: 80, effort: 6 }) // Convert to WebP format, quality 80
                .toFile(webpPath);

            const newStats = fs.statSync(webpPath);
            const savedBytes = originalStats.size - newStats.size;
            const savedPercentage = ((savedBytes / originalStats.size) * 100).toFixed(2);

            // Delete the original file entirely to save repository space
            fs.unlinkSync(filePath);
            
            console.log(`✅ Compressed [${fileName}] -> [${path.basename(webpPath)}] (Saved ${savedPercentage}%)`);
            successCount++;
        } catch (error) {
            console.error(`❌ Failed processing [${fileName}]: ${error.message}`);
            failedCount++;
        }
    }

    console.log('\n=======================================');
    console.log(`Optimization Complete!`);
    console.log(`• Successfully Optimized: ${successCount}`);
    console.log(`• Failed: ${failedCount}`);
    console.log('=======================================\n');
};

optimizeImages();
