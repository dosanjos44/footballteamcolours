import React  from 'react';
import './App.css';
import TeamBlock from './TeamBlock';
import ResultBlock from './ResultBlock';
import TeamData from './TeamData';
import SearchBar from './SearchBar';

class App extends React.Component {
  
  constructor(){
    super()
    this.state = {
        teams: TeamData,
        selectedTeam: {team: "Harchester United",
      primaryhex: "#760EA9",
      secondaryhex: "#FFFFFF"},
        searchTerm: "",
        searchTeams: TeamData
    }

    this.changeTeam = this.changeTeam.bind(this)
    this.searchChange = this.searchChange.bind(this)
  }


  changeTeam(team){

    this.setState(prevState => {
      let newSelect = {}

      for(var i = 0; i < this.state.teams.length; i++) {
        var obj = this.state.teams[i];
        if (obj.team === team){
          newSelect = {
            team: obj.team,
            primaryhex: obj.primaryhex,
            secondaryhex: obj.secondaryhex
          }
          break;
        }
      }  
      return{
        teams: this.state.teams,
        selectedTeam : newSelect
      }
    })
  }

  searchChange(term){

    console.log(term.toLowerCase())
    term = term.toLowerCase()
    let filterTeams = []

    if (term === ""){

      filterTeams = TeamData

    } else {
      /*
      filterTeams = this.state.teams.filter(function(x) {
        for (var i in x) {
            if (x[i].toLowerCase().indexOf(term.toLowerCase()) > -1) return x;
            }
          })
          */
  
      for(var team in this.state.teams){

          console.log(this.state.teams[team].team.toLowerCase())

          if(this.state.teams[team].team.toLowerCase().includes(term)){
               filterTeams.push(this.state.teams[team]);
          }
        }
      
    }
  

        



    console.log(filterTeams)

    this.setState( {
      searchTeams: filterTeams }
    )
  }

  
  
  render() {

    const TeamBlocks = this.state.searchTeams.map(team =>
      <TeamBlock key={team.id} team={team} changeTeam={this.changeTeam}/>
      ) 


    return (
      <div className="grid-container">
        
        <div className="Result">
          <ResultBlock team={this.state.selectedTeam}/>
        </div>

        <div className="TeamList">
          <SearchBar searchChange = {this.searchChange}/> 
          {TeamBlocks}
        </div>
      </div>
    );
  }
}

export default App;
