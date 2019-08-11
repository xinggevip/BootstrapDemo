$(function (){
    // 获取news-list
    var news_list = $(".news-list");
    var item = $(".news-list .news-list-item")
    console.log(news_list);
    console.log(item); 
    for (let i = 2;i < 61;i++){
        news_list.append(item.clone());
    }

    // 批量更换图片
    $(".news-list-item .picture").each(function (index,ele){
        if(index <9 ){
            index = "0" + (index+1);
            
        }else{
            index = "" + (index+1);
        }
        $(ele).css("background-image","url('../imgs/girls/" + index + ".jpg')")
    })

})