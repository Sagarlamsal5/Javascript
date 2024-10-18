img_array = ['img1.jpeg','img2.jpeg','img3.jpeg','img4.jpeg','img5.jpeg']
img_length = img_array.length
console.log(img_length)
i = 0

const demofunction=()=>{
    i = i%img_length
    // i = 0%5 = 0
    // i = 1%5 = 1
    // i = 2%5 = 2
    // i = 3%5 = 3
    // i = 4%5 = 4
    // i = 5%5 = 0

    // if(i>4){
    //     i = 0
    // }
    document.querySelector('img').src = `img/${img_array[i]}`
    i++
}
let set = setInterval(demofunction, 4000)

document.getElementById('btnr').addEventListener('click', demofunction)

document.getElementById('btnl').addEventListener('click', ()=>{
    if(i<0){
        i=4;
    }
    document.querySelector('img').src = `img/${img_array[i]}`;
    i--;
})

document.querySelector('.container').addEventListener('mouseover',()=>{
    clearInterval(set)
})
document.querySelector('.container').addEventListener('mouseout',()=>{
    set = setInterval(demofunction, 4000)
})