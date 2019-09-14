import React, {Component} from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

import './App.css';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { ISetSearchFieldAction } from '../store/SearchRobots/types';
import { setSearchField } from '../store/SearchRobots/actions';

import { IRequestRobots} from '../store/RequestRobots/types';
import { requestRobots} from '../store/RequestRobots/actions';

export interface IRobot {
  name: string;
  id: number;
  email: string;
}

interface IAppProps {
  robots: Array<IRobot>,
  onRequestRobots: typeof requestRobots,
  searchField: string,
  isPending: boolean,
  onSearchChange: any
};

const mapStateToProps = (state: AppState) => {
  return {
    searchField: state.SearchRobots.searchField,
    isPending: state.RequestRobots.isPending,
    robots: state.RequestRobots.robots,
    error: state.RequestRobots.error
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearchChange: (event: any) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends Component<IAppProps> {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render(): JSX.Element {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);

