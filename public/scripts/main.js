
$("button.theme-btn").click(function (){
    console.log("clicked");
    if($('html').attr('data-bs-theme')){
        $('html').attr('data-bs-theme', function(index, value){
            return value === 'dark' ? 'light' : 'dark' ;
        });
    }
})