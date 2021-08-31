// In the html on nav link button click, send the name of the button and set that to the new title
// It does the trick, but it would be better if I could check the scroll percent and from there determine where
// The user is to change the title, which seems easy enough, so I could do that later
function getName(page){
    if (page == 'about'){
        document.getElementById('name').innerHTML = 'jack/about'
    }
    else if (page == 'projects') {
        document.getElementById('name').innerHTML = 'jack/projects'
    } else {
        document.getElementById('name').innerHTML = 'jack/contact'
    }
}
