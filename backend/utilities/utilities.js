const fs = require('fs');

module.exports.base64ToImage = (base64_image, file_name) => {
    base64_str = base64_image.split(',')[1];

    const buffer = new Buffer.from(base64_str, 'base64');
    fs.writeFileSync(`./images/${file_name}.jpg`, buffer);

    return file_name;
}