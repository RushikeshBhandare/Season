import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import LoadingDisplay from './LoadingDisplay'

class App extends React.Component{
    
    state = {
        lat :null,
        errorMassage: ''
    }
    
    componentDidMount(){     
        window.navigator.geolocation.getCurrentPosition(
            (position )=>{
                this.setState({lat : position.coords.latitude})
            },
            (err)=>{
                // window.location.reload(true)
                
                this.setState({errorMassage : err.message})
                 console.log(err)
            }
        );
    }

   

    componentDidUpdate(){
        console.log("My Component was Jus tUpdate d")

    };

    rendorContent (){

        if (this.state.errorMassage && !this.state.lat) {
            return<LoadingDisplay text={this.state.errorMassage}/>
        }
        if (this.state.lat && !this.state.errorMassage) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <LoadingDisplay text={'Loading'}/>
        
    }
    //React says we have to define render 
    render(){
       return(
        <div className="border red">
            {this.rendorContent()}
        </div>

       )

    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))
