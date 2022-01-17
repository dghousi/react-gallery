import { Component} from 'react';
import logo1 from './images/earthspring (12).jpg';
import logo2 from './images/earthspring (13).jpg';
import logo3 from './images/earthspring (15).jpg';
import logo4 from './images/earthspring (5).jpg';
import logo5 from './images/earthspring (6).jpg';
import logo6 from './images/earthspring (7).jpg';
import logo7 from './images/earthspring (14).jpg';
import logo8 from './images/earthspring (9).jpg';
import logo9 from './images/earthspring (11).jpg';

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
          image:logo1,
          name : 'Kabul',
          id : 1,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          image:logo2,
          name : 'Herat',
          id : 2,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          image:logo3,
          name : 'MazarESharef ',
          id : 3,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          image:logo4,
          name : 'Kandahar',
          id : 4,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          image:logo5,
          name : 'Kondoz',
          id : 5,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          image:logo6,
          name : 'Badakhshan',
          id : 6,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          image:logo7,
          name : 'Bamyan',
          id : 7,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          image:logo8,
          name : 'Ghazne',
          id : 8,
          description : 'Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla '
        },
        {
          image:logo9,
          name : 'Norestan',
          id : 9,
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
