//get page name and set the title of the page to be 'jack / page'

function getName(){
    var page = document.getElementById('header-selected').innerHTML;
    if(page == 'about me'){
        page = 'about-me';
    }
    var combined = 'jack/' + page;
    document.getElementById('name').innerHTML = combined;
}