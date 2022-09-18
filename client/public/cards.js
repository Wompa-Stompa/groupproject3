class App extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div>
          This is the front of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>

        <div>
          This is the back of the card.
          <button onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
  }
}