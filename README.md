# umsplash
Unsplash Umbraco Property Editor by Luke Hook

Use the Unsplash Picker Property Editor to display and select an Unsplash image. Data is stored as a JSON object that includes URL's for various image size variants ('Full', 'Regular' 'Small', 'Thumb') as well as 'Alt'.

# Usage / Testing

Included is a sample Umbraco website utilising the Starter Kit package. If you build the solution and run the Umsplash.Web project you can experiment with using the package.

Login credentials are as follows:

Username: test@test.com
Password: password12

The Unsplash Picker data type has been created, you should be able to add this property to any of the document types for testing (currently on the Home page if you want to get started quickly)

# Requirements

You need to provide an Unsplash API Key in order to use this editor - currently this is stored against the Data Type when it is created

# Additional Features

- ~~Pagination~~
- Media Library download / storage
- Integration with built-in Media Picker
- Centralisation of API Key (AppSettings / Package Settings)

# References
This project was largely inspired by the Giphy Property Editor for Umbraco by Paul Seal from https://codeshare.co.uk
