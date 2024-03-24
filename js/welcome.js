function welcome(){
    let welcome_text = '欢迎光顾本博客'
    if(document.referrer!==''){
        let referrer=document.referrer.split("/")[2];
        welcome_text="欢迎你，来自"+referrer.toUpperCase()+"的用户！";
        if(referrer.toUpperCase()==document.domain.toUpperCase())return;
    }
    swal({
        title: " 欢迎！",
        text: welcome_text+'\n本域名fkcc.me即将到期，请访问新域名blog.fkcz.cc！',
        imageUrl: "/img/welcome.jpg",
        timer: 3000,
        showConfirmButton: false
    });
}
$(document).ready(()=>{
    welcome()
})