(function($, root){
    var $scope = $(document.body);
    var $playList = $("<div class='play-list'>"+
        "<div class='list-header'>播放列表</div>" + 
        "<ul class='list-wrapper'></ul>"+
        "<div class='close-btn'>关闭</div>"
    +"</div>");
    function render(data){
        var html = "";
        for(var i = 0;i < data.length;i++){
            html += "<li><h3>"+data[i].song+"-<span>"+data[i].singer+"</span></h3></li>"
        }
        $playList.find(".list-wrapper").html(html);
        $scope.append($playList);
        bindEvent()
    }
    function bindEvent(){
        $scope.find(".close-btn").on("click",function(){
            $playList.removeClass("show")
        })
        $playList.find("li").on("click",function(){
            var index = $(this).index();
            signSong(index);
            $scope.trigger("play:change",[index])
        })
    }
    
    function show(controlManager){
        $playList.addClass("show");
        signSong(0);
    }
    function signSong(index){
        $playList.find(".playing").removeClass("playing");
        console.log($playList.find("li").eq(index).addClass("playing"));
    }
    root.list = {
        render,
        show
    }
}(window.Zepto,window.player || (window.player = {})))