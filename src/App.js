import { Component} from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor ()
  {
    super();
    this.state = {
      places: [
        {
          name : 'Kabul',
          id : 1,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          name : 'Herat',
          id : 2,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          name : 'MazarESharef ',
          id : 3,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          name : 'Kandahar',
          id : 4,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          name : 'Kondoz',
          id : 5,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          name : 'Badakhshan',
          id : 6,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          name : 'Bamyan',
          id : 7,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
      ],
      searchField: ""
    }
  };

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({monsters: users}))
  // }

  changeHandler = (e) => {
    this.setState({searchField: e.target.value})
  }
  

  render() {
    // Object destructuring
    const {places, searchField} = this.state;
    // filtering
    const filteredPlaces = places.filter(place => place.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>AFGHANISTAN BEAUTIFUL PLACES</h1>
        <SearchBox placeholder="Search Places" changeHandler={this.changeHandler}/>
        <CardList places={filteredPlaces} />
      </div>
    )
  }
}
export default App;
