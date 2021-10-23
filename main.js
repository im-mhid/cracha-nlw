const linksSocialMedia = {
  github: 'im-mhid',
  youtube: 'channel/UCpJ1iHUKIVihr8OS3azQ9fw',
  instagram: 'im_mhid',
  linkedin: 'in/im-mhid',
  twitter: 'im_mhid'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userAvatar.src = data.avatar_url
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userGithubLogin.textContent = data.login
    })
}

getGithubProfileInfos()
changeSocialMediaLinks()
