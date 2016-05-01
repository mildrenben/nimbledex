var DexEntry = React.createClass ({
  getInitialState: function () {
    return {
      image: '',
      name: '',
      number: '',
      type1: '',
      type2: '',
      stats: [], // HP, Atk, Def, SpAtk, SpDef, Spe,
      evol: [] // 2D array. Num of lvl evolve or string for stone, then id of next poke.
    }
  },
  getData: function (name) {
    $.get( "http://pokeapi.co/api/v2/pokemon/" + name, function( d ) {
      // Basic Data
      this.setState ({
        image: '/img/' + d.id + '.png',
        name: d.name,
        number: d.id,
        type1: d.types[0].type.name,
      });

      // Stats
      for (var i = 0; i < d.stats.length; i++) {
        var newStats = this.state.stats;
        newStats.unshift (d.stats[i].base_stat);
        this.setState ({
          stats: newStats
        });
      }

      // If second type
      if (d.types.length > 1) {
        this.setState ({
          type2: d.types[1].type.name
        });
      }
      else {
        this.setState ({
          type2: ''
        });
      }
    }.bind(this));

    $.get("http://pokeapi.co/api/v2/evolution-chain/" + 4, function ( d ) {
      if (d.chain.evolves_to.length === 0) {
        return;
      }

      var firstChainIdAPI = d.chain.evolves_to[0].species.url;
      var firstChainIdName = d.chain.evolves_to[0].species.name;
      var firstChainId = parseInt(firstChainIdAPI.slice(firstChainIdAPI.indexOf('pokemon-species/') + 16, firstChainIdAPI.length - 1));
      var firstChainImg = '/img/' + firstChainId + '.png';
      var firstChain = this.state.evol.concat([d.chain.evolves_to[0].evolution_details.min_level,
                                               firstChainImg,
                                               firstChainIdName]);
      this.setState ({
        evol: firstChain
      });
    }.bind(this));
  },
  componentWillMount: function () {
      this.getData (this.props.name);
  },
  getNewData: function (name) {
    this.getData(name)
  },
  render: function () {
    return (
      <div>
        <Search getNewData={this.getNewData} />
        <Id image={this.state.image} name={this.state.name} number={this.state.number} />
        <Types type1={this.state.type1} type2={this.state.type2} />
        <Evol evol={this.state.evol} />
        <Stats stats={this.state.stats} />
      </div>
    )
  }
});

var Search = React.createClass ({
  getInitialState: function () {
    return {
      name: ''
    }
  },
  updateState: function (e) {
    this.setState({
      name: e.target.value
    });
  },
  handleSubmit: function () {
    this.props.getNewData(this.state.name);
    this.setState ({
      name: ''
    });
  },
  render: function () {
    return (
      <div className="search">
        <input className="search_input" value={this.state.name} onChange={this.updateState} />
        <button className="search_btn" onClick={this.handleSubmit}>Search</button>
      </div>
    )
  }
});

var Id = React.createClass({
  render: function () {
    return (
        <div className="id">
          <img className="id_image" src={this.props.image} alt={this.props.name}/>
          <h2 className="id_name">{this.props.name}</h2>
          <p className="id_number">{this.props.number}</p>
        </div>
    )
  }
});

var Types = React.createClass({
  render: function () {
    return (
      <div className="types">
        <p className={this.props.type1}>{this.props.type1}</p>
        <p className={this.props.type2}>{this.props.type2}</p>
      </div>
    )
  }
});

var Evol = React.createClass({
  render: function () {
    var img = this.props.evol;
    console.log(this.props.evol[0]);
    return (
      <div className="evol-chain">
        <div className="evol-chain_1">
        </div>
        <div className="evol-chain_2">
          <img src={this.props.evol[1]}/>
          <p> Lvl {this.props.evol}</p>
        </div>
        <div className="evol-chain_3">
        </div>
      </div>
    )
  }
});

var Stats = React.createClass({
  render: function () {
    var statsNames = ['HP', 'Atk', 'Def', 'SpAtk', 'SpDef', 'Spe'];
    return (
      <div className="stats">
        <div>
          {statsNames[0]}
          {this.props.stats[0]}
        </div>
        <div>
          {statsNames[1]}
          {this.props.stats[1]}
        </div>
        <div>
          {statsNames[2]}
          {this.props.stats[2]}
        </div>
        <div>
          {statsNames[3]}
          {this.props.stats[3]}
        </div>
        <div>
          {statsNames[4]}
          {this.props.stats[4]}
        </div>
        <div>
          {statsNames[5]}
          {this.props.stats[5]}
        </div>
      </div>
    )
  }
});

ReactDOM.render(<DexEntry name="charmander"/>, document.getElementById('root'));
