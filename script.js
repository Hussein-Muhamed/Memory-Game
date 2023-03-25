
var arr = []
var count = 0

var imgs = document.getElementsByTagName('img')

//to shuffle imgs every time
var ids = [1,1,2,2,3,3,4,4,5]
var shuffledArray = [1,1,2,2,3,3,4,4,5].sort(() => 0.5 - Math.random())
for(let i = 0 ; i<imgs.length;i++){
    imgs[i].id = shuffledArray[i]
}

function showMe(x){
    arr.push(x.id)
    
    if(arr[0] == arr[1]){
        count ++
    }
    
    if(arr.length == 1){
        x.src = `../pics/game/${x.id}.jpg`
    } else if (arr.length == 2){
        if(arr[0] == arr[1]){
            x.src = `../pics/game/${x.id}.jpg`
            arr = []
        } else {
            x.src = `../pics/game/${x.id}.jpg`
            setTimeout( function(){ x.src = `../pics/game/6.jpg` },500)
            arr.pop()
        }
    }

    if(count == 4){
        alert("CONGRATULATION YOU FINISH THE GAME")
        setTimeout(restart,1000)
    }

    function restart(){
        location.reload()
    }

    if(x.id == 5){
        x.src = `../pics/game/${x.id}.jpg`
        setTimeout(restart,1000)
    }
}

