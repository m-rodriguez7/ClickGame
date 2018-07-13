import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Jumbo from './components/Jumbo';
import Image from './components/Image';
// only way I can display local images :(
import cat1 from './assets/cat1.jpg' 
import cat2 from './assets/cat2.jpg'
import cat3 from './assets/cat3.jpg'
import cat4 from './assets/cat4.jpg'
import cat5 from './assets/cat5.jpg'
import cat6 from './assets/cat6.jpg'
import cat7 from './assets/cat7.jpg'
import cat8 from './assets/cat8.jpg'
import cat9 from './assets/cat9.jpg'
import cat10 from './assets/cat10.jpg'
import cat11 from './assets/cat11.jpg'
import cat12 from './assets/cat12.jpg'
import cat13 from './assets/cat13.jpg'
import cat14 from './assets/cat14.jpg'

class App extends Component {
  state = {
    clicked: [],
    imageSrc: [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13, cat14],
    score: 0,
    highScore: 0,
  }

  componentDidMount() {
    console.log("page mounted");
    // put on load functions here
    this.imageScramble();
    // scrambles the photos on load.
  }

  

  imageScramble() {
    function shuffle(array) {
      let newArr = [];
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      newArr = array;
      return newArr; // MAGIC
    }
    this.setState({imageSrc: shuffle(this.state.imageSrc)});
    console.log("images scrambled on load")
  }

  photoClick(img) {
    // img matches the img source, so i can check whether it has been clicked or not.
    function shuffle(array) {
      let newArr = [];
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      newArr = array;
      return newArr; // MAGIC
    }
    
    
    this.setState({imageSrc: shuffle(this.state.imageSrc)});
    console.log("images scrambled")

    if (!this.state.clicked.includes(img)) {
      let newArray = this.state.clicked.slice();
      newArray.push(img);
      this.setState({score: this.state.score + 1, clicked: newArray });
      setTimeout(() => {// trying to get the scores to sync up correctly
        if (this.state.score > this.state.highScore) {
          this.setState({highScore: this.state.score});
        }
      }, 1);
      console.log(this.state.clicked);
    } else {
      alert('Sorry! You clicked this before. Try again!');
      this.setState({score: 0, clicked: []})
    }
    
    if (this.state.score === 14) {
      alert("congrats, you clicked them all without repeating! Now try again!");
      this.setState({score: 0, clicked: []})
    }
    
  }
  
  render() {
    return (
      <div>
        <Nav score={this.state.score} high={this.state.highScore}>Image Click Game</Nav>
        <Jumbo info="Click on Cats! Click a different cat each time. If you click the same cat, the score resets!">Cat Clicker!</Jumbo>
        <div className="container-fluid">
            {this.state.imageSrc.map((img, i) => <Image src={img} key={i} onClick={() => this.photoClick(img)} />)}
        </div>
      </div>
    );
  }
}

export default App;
