# Use Particle Photon Sensor Data in P5.js!
This example makes art from photoresistor data, collected by the Particle photon. The photon must be up and running and connected to wifi. See the tutorial [Follow the tutorial here](https://docs.particle.io/guide/getting-started/connect/photon/) to get started.

Next, build the [Read your Photoresistor: Function and Variable](https://docs.particle.io/guide/getting-started/examples/photon/#read-your-photoresistor-function-and-variable) project from the Particle website and make sure it's working.

You should now have a URL where you can access the photo resistor reading. It looks like this: https//api.particle.io/v1/devices/YOUR_DEVICE_ID/analogvalue?access_token=YOUR_ACCESS_TOKEN

You can make an API call in P5.js and get the photoresitor reading, which you can store as a variable and then use in your art project.

This example uses the photoresistor reading to create filled circles on a black canvas. Substitute your device ID and access token where indicated in the URL. Enjoy!
