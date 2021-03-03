let cards = []



const filteredInfo = function (data) {
     
    const filteredObj = {
        firstName:data.results[0].name.first,
        lastName:data.results[0].name.last,
        email:data.results[0].email
    }    
    cards.push(filteredObj)
    renderer(cards)


}

const gettingData = function(n){
    for (i = 0; i < n; i++) {

        $.ajax({
            method: "GET",
            url: "https://randomuser.me/api/",
            success: filteredInfo,
            error: function (xhr, text, error) {
                console.log(text);
            }
        })
    }
    
}
gettingData(12)

const renderer = function (cards) {
    $("#container").empty()
    const source = $("#card-template").html()
    const template = Handlebars.compile(source)
    const newHTML = template({ card: cards })
    // console.log(cards);
    $("#container").append(newHTML)

}

$(".regenerate").on("click",function(){
    
let HowManyRandomPeopleToFind =($("#custom-select").val())
cards = [];
if (HowManyRandomPeopleToFind>0){
    $(".Message").empty()
    gettingData(HowManyRandomPeopleToFind)

}else{
    $(".Message").empty()
    $(".Message").append("<p>You should select how many people first</p>")
}

}
    
)
