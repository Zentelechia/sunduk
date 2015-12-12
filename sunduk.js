 if (Meteor.isServer) {
        ServiceConfiguration.configurations.remove({
            service: 'vk'
        });

        ServiceConfiguration.configurations.insert({
            service: 'vk',
            appId:   '5185648',      // Your app id
            secret:  'Cf3RVkhVGgClsFpqdOuf' // Your app secret
        });
    }