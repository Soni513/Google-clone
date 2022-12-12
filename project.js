document.querySelector('#main').onsubmit = function(e){
    e.preventDefault();
    var search =document.querySelector('#search-box').value;
    location.href=('https://www.google.com/search?q='+search)
}; 