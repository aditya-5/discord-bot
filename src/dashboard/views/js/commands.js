

$( document ).ready(function() {
    $(".errorMsg").hide()

    $(".categories li")[0].classList.add("active")
    setCategory.bind($(".categories li")[0])()


    $(".categories li").on("click", setCategory)

    $("#searchBtn").on("click", updateResults)
    $("input").on("keyup", updateResults)
});

function updateResults(){
    if(!$("input").val()){
        $(".commands li").show()
    }else{
        const results = new Fuse(commands, {
            isCaseSentitive: false,
            keys:[{name:"name", weight: 1}, {name:"category", weight: 0.2}]
        }).search(($("input").val()))
        .map(result=> result.item)
    
        $(".categories li").removeClass("active")
        $(".commands li").hide()
        
        for(const result of results){
            $(`.commands li#${result.name}`).show() 
        }
        $(".errorMsg").hide()
    }
    
}

function setCategory(){
    $(".categories li").removeClass("active")
        $(".commands li").hide() 
        $(`.commands li.${$(this)[0].id}`).show() 
        if($(`.commands li.${$(this)[0].id}`).length<1){
            $(".errorMsg").show()
        }else $(".errorMsg").hide()
        $(this).addClass("active")
}