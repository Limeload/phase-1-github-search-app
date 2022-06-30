const form = document.getElementById("github-form");
form.addEventListener("submit", (event) => {
    event.preventDefault()
    //event.target[0].value
    fetch(`https://api.github.com/search/users?q=${event.target[0].value}`)
    .then(response => response.json())
    .then(response => {
        const userList = document.querySelector("#user-list")
        const reposList = document.getElementById("repos-list")
        reposList.innerHTML = ""
        userList.innerHTML = ""
          //login, avatar_url, profile
          response.items.map(item => {
              const li = document.createElement("li")
              const h2 = document.createElement("h2")
              h2.textContent = item.login
              h2.addEventListener("click", e => showUserRepos(ite.login, e))
              const img = document.createElement("img")
              img.src = item.avatar_url
              li.append(h2, img)
              userList.append(li)
          })
    })
    form.reset()
})



