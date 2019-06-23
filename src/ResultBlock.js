import React from "react"

class ResultBlock extends React.Component{
  

    render(){

        const blockStyle = {
            color: this.props.team.secondaryhex,
            backgroundColor: this.props.team.primaryhex
        }

        return(

            <div>
                <h3 className = "resultHeader" style = {blockStyle}>{this.props.team.team}</h3>
                <p class="resultText">Primary: {this.props.team.primaryhex}</p>
                <p class="resultText">Secondary: {this.props.team.secondaryhex}</p>
            </div>
        )

    }
}


export default ResultBlock