const btntry = document.querySelector('#btntry')
const bntreset = document.querySelector('#bntreset')
const screen1 = document.querySelector('.screen1') 
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
console.log(randomNumber)

const message = [
    {
        msg:"A vida trará coisas boas se tiver paciência.",
    },
    {
        msg:"Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."
    },
    {
        msg:"Não compense na ira o que lhe falta na razão."
    },
    {
        msg:"Defeitos e virtudes são apenas dois lados da mesma moeda."
    },
    {
        msg:"A maior de todas as torres começa no solo."
    },
    {
        msg:"Não há que ser forte. Há que ser flexível."
    },
    {
        msg:"Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"
    },
    {
        msg:"Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."
    },
    {
        msg:"A juventude não é uma época da vida, é um estado de espírito."
    },
    {
        msg:"Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
    },
    {
        msg:"Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida."
    }
    
]



function handletryclick(event){
   event.preventDefault()
   togglesscreen()
   screen2.querySelector('p').innerText = `${message[randomNumber].msg}`
   
}

function handresetclick (){
    togglesscreen()
    randomNumber = Math.round(Math.random() * 10)
}

function togglesscreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
} 

btntry.addEventListener('click', handletryclick )
bntreset.addEventListener('click', handresetclick )

   