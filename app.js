Notification.requestPermission().then(perm => {
    if (perm === 'granted') {
        new Notification('Teachers Cambodia', {
            body: 'Welcome to our app!'
        });
    }
});