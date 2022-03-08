function attachEvents() {


    let loadButton=document.getElementById('btnLoadPosts');
    let selectPosts=document.getElementById('posts');


    loadButton.addEventListener('click',function () {

        let promise=fetch(`https://my-blog-63590-default-rtdb.firebaseio.com/Programing-types/.json`)

        promise
            .then(res=>res.json())
            .then(data=>{

                let keys=Object.keys(data);

               selectPosts.innerHTML=keys.map(x=>`<option value=${x}>${data[x].title}</option>`).join('');

            });

        selectPosts.addEventListener('change',function (event) {
            let buttonView=document.getElementById('btnViewPost');
            fetch(`https://my-blog-63590-default-rtdb.firebaseio.com/Programing-types/${event.currentTarget.value}/.json`)
                .then(res =>res.json())
                .then(data =>{
                     buttonView.addEventListener('click',function () {
                         let h1Change=document.getElementById('post-title');
                         let ulList=document.getElementById('post-body');
                         let ulComments=document.getElementById('post-comments');


                         h1Change.textContent=`${data.title}`
                         ulList.innerHTML=`<li>${data.id}</li>`
                         ulComments.innerHTML=`<li>${data.body}</li>`
                     })


                });
                });
    });






}
attachEvents();
