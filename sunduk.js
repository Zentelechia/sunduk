 if (Meteor.isServer) {
        ServiceConfiguration.configurations.remove({
            service: 'vk'
        });

        ServiceConfiguration.configurations.insert({
            service: 'vk',
            appId:   '5185708',      // Your app id
            secret:  'UNGn1f6zRGdSJnhIJPyp' // Your app secret
        });
    }