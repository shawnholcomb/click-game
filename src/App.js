import React, { Component } from "react";
import './App.css';
import Nav from './components/Nav';
import Body from './components/Body';
import Card from "./components/Card";
import Footer from './components/Footer';

let score = 0;
let topscore = 0;
let cards = [
  {
    key: 1,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/april.jpg',
  },
  {
    key: 2,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/bebop.jpg',
  },
  {
    key: 3,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/caseyjones.jpg',
  },
  {
    key: 4,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/donatello.jpg',
  },
  {
    key: 5,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/foot.jpg',
  },
  {
    key: 6,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/krang.jpg',
  },
  {
    key: 7,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/leonardo.jpg',
  },
  {
    key: 8,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/michelangelo.jpg',
  },
  {
    key: 9,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/raphael.jpg',
  },
  {
    key: 10,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/rocksteady.jpg',
  },
  {
    key: 11,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/shredder.jpg',
  },
  {
    key: 12,
    image: 'https://raw.githubusercontent.com/shawnholcomb/click-game/master/public/assets/images/splinter.jpg',
  }
]

let selectedCards = []

class App extends Component {
  state = {
    cards,
    score,
    topscore
  };

  onCardClick = event => {
    let id = event.target.attributes.getNamedItem('data-id').value;

    function startGame() {
      if (!selectedCards.includes(id)) {
        console.log("new " + id)
        selectedCards.push(id);
        score++;
      } else {
        console.log("already picked " + id)
        if (score > topscore) {
          topscore = score
        };
        score = 0;
        selectedCards = [];
      }
      console.log(selectedCards, score, topscore)
    }

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }

    startGame()
    shuffleArray(cards);
    console.log(cards)
  }

  render() {
    return (
      <div>
        <Nav score={score} topscore={topscore} />
        <Body />
        <Card characters={this.state.cards} onClick={this.onCardClick} />
        <Footer />
      </div>
    );
  }
}

export default App;