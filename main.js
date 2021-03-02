Promise.all([
    fetch('/person'),
    fetch('/person/name'),
    fetch('/person/adress'),
    fetch('/person/post/recipient'),
    // fetch('/person/:personValue')
]).then(res => res.json()
    .then(result => {
        console.log(result)
    }));



    