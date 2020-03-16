import React,  {Component} from 'react';

class Sam extends Component{

    state = {time: 0}

    componentDidMount() {
        this.increaseTime();
    }

    increaseTime() {
        for(let i = 1; i < 61 ; i++ ){
            setTimeout(()=> this.setState({ time: i }), i*1000 )

        }
    }
    
    render() {
        return(
            <div style={{margin: 100, background: 'red'}}>
                <div>{this.props.myMessage}</div>
                {this.state.time} Seconds
            </div>
        );
    }

}
export default Sam;