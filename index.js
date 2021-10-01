// Add your code here
function submitData(userName, userEmail){
    const userObj = {
        name: userName,
        email: userEmail
    }

    const configurationObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify(userObj)
    }

    return fetch ('http://localhost:3000/users', configurationObj)
        .then (resp => resp.json())
        .then (data => {
            console.log(data)
            console.log (data.id)
            const newP = document.createElement('p')
            const div = document.getElementById('data-id')
            div.append(newP)
            newP.textContent = `The Id of the newly sent data is ${data.id}`
        })
        .catch ( error => {
            alert("oh oh! Seomething went wrong")
            const div = document.getElementById('data-id')
            const newP = document.createElement('p')
            div.append(newP)
            newP.textContent = `This POST request failed: ${error.message}`
        })

        //return (fetch ('http://localhost:3000/users', configurationObj))
}

