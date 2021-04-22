import React, {PureComponent} from "react";

const withActiveShowMore = (Component) => {
  class WithActiveShowMore extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        number: 8,
      };

      this._handlerClickButton = this._handlerClickButton.bind(this);
    }

    _handlerClickButton() {
      this.setState(() => ({
        number: this.state.number + 8
      }));
    }

    componentWillUnmount() {
      this.setState(() => ({
        number: 8,
      }));
    }

    render() {
      return <Component
        {...this.props}
        number={this.state.number}
        handlerClickButton={this._handlerClickButton}

      />;
    }

  }

  return WithActiveShowMore;
};

export default withActiveShowMore;
