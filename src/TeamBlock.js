import React from "react"
/*
function TeamBlock(props) {
    return(
        <div>
            <h3>{props.team.team}</h3>
            <p>Primary: {props.team.primaryhex}</p>
            <p>Secondary: {props.team.secondaryhex}</p>
        </div>
    )
}
*/

class TeamBlock extends React.Component{

    render(){

        const blockStyle = {
            color: this.props.team.secondaryhex,
            backgroundColor: this.props.team.primaryhex
        }

        const team = this.props.team.team

        return(
            <div>
                <h3 className="teamBlock" style = {blockStyle} onClick={() => {this.props.changeTeam(team)}}>{team}</h3>
            </div>  
        )
    }




}


export default TeamBlock