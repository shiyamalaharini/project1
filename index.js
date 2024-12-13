let testimonial_data =[
    {
        name:"Anitha",
        image:"anitha.jpeg",
        text_content:"I am Anitha from tambaram. I am a software web deginer. I love to travel and explore new places.",
    },
    {
        name:"Anto",  
        image:"anto.jpeg",
        text_content:"I am Anto from kerala. I am a software engineer. I love to travel and explore new places.",
    },
    {
        name:"Shiyam",
        image:"shym.jpeg",
        text_content:"I am shiyam from chennai. I am a web devloper. I love to travel and explore new places.",
    }
        

]

let data = 0
let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial(){
    let current =testimonial_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++
    
    if(data===testimonial_data.length){
        data = 0
    }
}

setInterval(()=>{testimonial()},1000);
testimonial()