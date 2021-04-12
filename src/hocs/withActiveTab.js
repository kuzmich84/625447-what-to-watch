import React, {PureComponent} from "react";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isActive: 0,
      };

      this._handlerTabOpen = this._handlerTabOpen.bind(this);
    }

    _handlerTabOpen(i) {
      this.setState(() => ({
        isActive: +i
      }));
    }

    render() {

      return <Component
        {...this.props}
        handlerTabOpen={this._handlerTabOpen}
        isActive={this.state.isActive}
      />;

    }
  }

  return WithActiveTab;

};

export default withActiveTab;
