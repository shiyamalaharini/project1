let testimonial_data =[
    {
        name:"Obito Uchiha",
        image:"obo.jpg",
        text_content:"Obito Uchiha is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto.",
    },
    {
        name:"Itachi Uchiha",  
        image:"thh.jpg",
        text_content:"Itachi Uchiha is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto.",
    },
    {
        name:"Naruto Uzumaki",
        image:"th.jpg",
        text_content:"Naruto Uzumaki is the main protagonist of the popular Japanese manga and anime series Naruto created by Masashi Kishimoto.",
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