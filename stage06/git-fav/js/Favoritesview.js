import { githubUser } from "./githubUser.js"

export class Favorites{
    constructor(root){
        this.root = document.querySelector(root) //procura a #app e joga no root
        this.load() // carrega os dados
    }

    load(){
         this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
        //this.entries 
    }

   async add(username){
    try {
        const userExists = this.entries.find(entry => entry.login === username)

        if(userExists){
            throw new Error('usuário já cadastrado')
        }
        const user = await githubUser.search(username)

        if(user.login === undefined){
            throw new Error('usuário não encontrado!')                                            
        }

        this.entries = [user, ...this.entries]
        this.update()
        this.save()
    } catch(error) {
        alert(error.message)
    }
    }

    save(){
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }

 

    delete(user) {
        const filterredEntries = this.entries
        .filter(entry => entry.login !== user.login) // se for diferente verdadeiro se não falso

        this.entries = filterredEntries
        this.update()
        this.save()
    }
}



export class Favoritesview extends Favorites {
    constructor(root){
        super(root) //cola 

         this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    
          
    }

    onadd() {
        const addbutton = this.root.querySelector('.search button')
        addbutton.onclick = () => {
            const { value } = this.root.querySelector('.search input')
           
            this.add(value)
        }
    }
   
    update() {
    this.emptyState()
    this.removeAlltr()

    this.entries.forEach(user => {
        const row = this.createRow() //pega a estrutura criada na addon

        row.querySelector('.user a').href =`https://github.com/${user.login}`
        row.querySelector('.user img').src = `https://github.com/${user.login}.png`
        row.querySelector('.user p').textContent = user.name
        row.querySelector('.user img').alt = `image de ${user.name}`
        row.querySelector('.user span').textContent = user.login
        row.querySelector('.repositories').textContent = user.public_repos
        row.querySelector('.fallowers').textContent = user.followers

        row.querySelector('.remove').onclick = () => {
            const isOk = confirm('tem certeza que deseja deletar essa linha?')

            if (isOk) {
                this.delete(user)
            }
        }

        this.tbody.append(row)
    })
    }

    createRow() {
      const tr = document.createElement('tr') // criou o tr o conteiner que vai conter os elementos tem que ser criado

         tr.innerHTML= `<td class="user"><img src="https://github.com/maykbrito.png" alt="imagem do mayke">
                <a href="https/github.com/maykbrito" target="_blank">
                    <p>mayk brito</p>
                    <span>maykbrito</span>
                </a>
            </td>
            <td class="repositories">76</td>
            <td class="fallowers">9589</td>
            <td><button class="remove">Remover</button></td>

            `

            return tr

    }
   
    removeAlltr() {
        const tbody = this.root.querySelector('table tbody')
        tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
            
        })
 

    }

    emptyState() {
        if (this.entries.length === 0) {
            this.root.querySelector('.empty-state').classList.remove('hide')
        } else {
            this.root.querySelector('.empty-state').classList.add('hide')
        }
    }
}



