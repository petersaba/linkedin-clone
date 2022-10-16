module.exports.base64ToImage = (base64_image, file_path) => {
    base64_str = base64_image.split(',')[1];

    const buffer = new Buffer.from(base64_str, 'base64');
    fs.writeFileSync(file_path, buffer);
}