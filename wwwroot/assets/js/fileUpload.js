$(function() {
    // Configure Cloudinary
    // with the credentials on
    // your Cloudinary dashboard
    $.cloudinary.config({ cloud_name: 'Data Sharing
', api_key: '1:1088251263448:web:b30293bd55525c06a81aad'});
    // Upload button
    var uploadButton = $('#submit');
    // Upload-button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'Data Sharing
', upload_preset: 'YOUR_UPLOAD_PRESET', tags: ['cgal']}, 
        function(error, result) { 
            if(error) console.log(error);
            // If NO error, log image data to console
            var id = result[0].public_id;
            console.log(processImage(id));
        });
    });
})
function processImage(id) {
    var options = {
        client_hints: true,
    };
    return '<img src="'+ $.cloudinary.url(id, options) +'" style="width: 100%; height: auto"/>';
}