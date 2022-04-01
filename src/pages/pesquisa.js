import React from "react"
import axios from "axios"

const movies = axios.create({
    baseURL:"https://api.themoviedb.org/3/movie/popular?api_key=4325378346eac4ca5bf909477593a901&language=pt-BR"
})

export default class App extends React.Component{

    state = {
        listMovies: [],
        filmBusc:[]
    }

    async componentDidMount(){
        this.getMovie()
    }

    getMovie = async () => {
        const response = await movies.get()
        const filmes = response.data.results.map(item =>{
            return{
                ...item,
                imgApi: `https://image.tmdb.org/t/p/w500/${item.poster_path}`
            }
        })
        this.setState({
            listMovies: filmes,
            filmBusc: filmes
        })
    }

    filter = (event) => {
        const {listMovies} = this.state
        const movieFilter = listMovies.filter((item) =>{
            if(item.title.toLowerCase().includes(event.target.value.toLowerCase())){
                return true;
            }
        })
        this.setState({
            filmBusc:movieFilter
        })

    }
    
    render(){
        return(
            <div>

                <h1>Filmes</h1>
                <div>

                    <input type="text" placeholder="O que procura..." onChange={this.filter}/>

                </div>
                    {this.state.filmBusc.map((item) => (
                        
                        <div key={item.id}>
                           
                            <ul>
                                <li>{item.title}</li>
                            </ul>
                            <img src={item.imgApi} alt={`Banner do filme:${item.title}`}/>
                            <p>{item.overview}</p>
                            
                        </div>
                    ))}
            </div>
        )
    }

}