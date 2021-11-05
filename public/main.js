var like = document.getElementsByClassName("fa-heart");
var comment = document.getElementsByClassName("fa-comment");

Array.from(like).forEach(function(element) {
  element.addEventListener('click', function(){
    const id = this.parentNode.parentNode.childNodes[1].innerText
    const likes = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
    console.log(id, this.parentNode.parentNode.childNodes[5].innerText)
    
    fetch('posts/likes', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        '_id': id,
        'likes': likes,
    
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
