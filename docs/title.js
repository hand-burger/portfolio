// Update page title based on scroll percentage
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPct = (scrollTop / scrollHeight) * 100;

    let section = 'home';
    if (scrollPct > 84.95) {
        section = 'contact';
    } else if (scrollPct > 51.93) {
        section = 'projects';
    } else if (scrollPct > 16.79) {
        section = 'about';
    } else if (scrollPct < 0 || scrollPct > 100) {
        section = '';
    }

    const title = section ? `jack/${section}` : 'jack';
    document.getElementById('name').textContent = title;
    document.title = title;
});