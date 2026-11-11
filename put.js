fetch("https://dummyjson.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        quote: "Learning Java Full Stack",
        author: "Divya"
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));