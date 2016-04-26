import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }

  render() {
    var indicator = 0;
    if(this.props.indicator)
    {
      indicator = this.props.indicator;
    }
    return (
        <div className='container-fluid progress-bar-container'>
          <div className='progrss'>
            <div classname='progress-bar progrss-bar-striped active' role='progrssbar' aria-valuenow={indicator} aria-valuemin='0' aria-valuenow='100' style={{width: + indicator + '%'}}>
              <span className='sr-only'>{indicator}% complete</span>
            </div>
          </div>
           <p className='text-center'>Loading ...</p>
        </div>
    );
  }
}

export default ProgressBar;