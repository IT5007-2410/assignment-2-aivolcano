/*Q1. JS Variable needs to be created here. Below variable is just an example. Try to add more attributes.*/
const initialTravellers = [
  {
    id: 1, name: 'Jack', phone: 88885555,
    bookingTime: new Date(),
    email: 'jack@nus.edu.sg',
    origin: 'Singapore',
    destination: 'Kuala Lumpur',
    travelDate: new Date('2024-10-01'),
    seatNumber: 'D1',
    ticketPrice: 50.50,
  },
  {
    id: 2, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    email: 'rose@ntu.edu.sg',
    origin: 'Singapore',
    destination: 'Chiang Mai',
    travelDate: new Date('2024-10-02'),
    seatNumber: 'B2',
    ticketPrice: 100.00,
  },
  {
    id: 3, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    email: 'rose@ntu.edu.sg',
    origin: 'Singapore',
    destination: 'Chiang Mai',
    travelDate: new Date('2024-10-02'),
    seatNumber: 'B2',
    ticketPrice: 100.00,
  },
  {
    id: 4, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    email: 'rose@ntu.edu.sg',
    origin: 'Singapore',
    destination: 'Chiang Mai',
    travelDate: new Date('2024-10-02'),
    seatNumber: 'B2',
    ticketPrice: 100.00,
  },
  {
    id: 5, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    email: 'rose@ntu.edu.sg',
    origin: 'Singapore',
    destination: 'Chiang Mai',
    travelDate: new Date('2024-10-02'),
    seatNumber: 'B2',
    ticketPrice: 100.00,
  },
  {
    id: 6, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    email: 'rose@ntu.edu.sg',
    origin: 'Singapore',
    destination: 'Chiang Mai',
    travelDate: new Date('2024-10-02'),
    seatNumber: 'B2',
    ticketPrice: 100.00,
  },
  {
    id: 7, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    email: 'rose@ntu.edu.sg',
    origin: 'Singapore',
    destination: 'Chiang Mai',
    travelDate: new Date('2024-10-02'),
    seatNumber: 'B2',
    ticketPrice: 100.00,
  },
  {
    id: 8, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    email: 'rose@ntu.edu.sg',
    origin: 'Singapore',
    destination: 'Chiang Mai',
    travelDate: new Date('2024-10-02'),
    seatNumber: 'B2',
    ticketPrice: 100.00,
  },
  {
    id: 9, name: 'Rose', phone: 88884444,
    bookingTime: new Date(),
    email: 'rose@ntu.edu.sg',
    origin: 'Singapore',
    destination: 'Chiang Mai',
    travelDate: new Date('2024-10-02'),
    seatNumber: 'B2',
    ticketPrice: 100.00,
  },
];
let travellerId = 20;


function TravellerRow(props) {
  {/*Q3. Placeholder to initialize local variable based on traveller prop.*/}
  const traveller = props.traveller;
  return (
    <tr>
	  {/*Q3. Placeholder for rendering one row of a table with required traveller attribute values.*/}
    <td>{traveller.id}</td>
    <td>{traveller.name}</td>
    <td>{traveller.phone}</td>
    <td>{traveller.bookingTime.toLocaleString()}</td>
    <td>{traveller.email}</td>
    <td>{traveller.origin}</td>
    <td>{traveller.destination}</td>
    <td>{traveller.seatNumber}</td>
    <td>{traveller.ticketPrice}</td>
    <td>
        <button onClick={() => props.deleteTraveller(traveller.id)}>Delete</button>
    </td>
    </tr>
  );
}

function Display(props) {
  console.log("display:", props.travellers);
	/*Q3. Write code to render rows of table, reach corresponding to one traveller. Make use of the TravellerRow function that draws one row.*/
  
  return (
    <table className="bordered-table">
      <thead>
        <tr>
	  {/*Q3. Below table is just an example. Add more columns based on the traveller attributes you choose.*/}
          <th>ID</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Booking Time</th>
          <th>Email</th>
          <th>Origin</th>
          <th>Destination</th>
          <th>Seat Number</th>
          <th>Ticket Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
        {
            props.travellers.map(t => (
              <TravellerRow key={t.id} traveller={t} deleteTraveller={props.deleteTraveller}/> // 将单个旅客对象传递给 TravellerRow
            ))
        }
      </tbody>
    </table>
  );
}

class Add extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    console.log("add:", e);
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
    const name = e.target.travellername.value.trim();
    const phone = e.target.travellerphone.value.trim();
    // const email = e.target.travelleremail.value.trim();
    // const origin = e.target.travellerorigin.value.trim();
    // const destination = e.target.travellerdestination.value.trim();
    // const seatNumber = e.target.travellerseatnumber.value.trim();
    // const ticketPriceValue = e.target.travellerticketprice.value.trim();

    
    if (!name || !phone) {
      alert("Name and phone are required.");
      return; 
    }
    const newId = Math.floor(Math.random() * 1000);
  
    const newTraveller = {
      id: travellerId++,
      name: e.target.travellername.value,
      phone: e.target.travellerphone.value,
      email: e.target.travelleremail.value,
      origin: e.target.travellerorigin.value,
      destination: e.target.travellerdestination.value,
      seatNumber: e.target.travellerseatnumber.value,
      ticketPrice: e.target.travellerticketprice.value,
      bookingTime: new Date(),
    };
    this.props.bookTraveller(newTraveller);
    //reset the form
    // this.setState({ name: '', phone: '', email: '', origin: '', destination: '', seatNumber: '', ticketPrice: '', bookingTime: '' });
    e.target.reset();
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
        <input type="text" name="travellerphone" placeholder="Phone" />
        <input type="text" name="travelleremail" placeholder="Email" />
        <input type="text" name="travellerorigin" placeholder="Origin" />
        <input type="text" name="travellerdestination" placeholder="Destination" />
        <input type="text" name="travellerseatnumber" placeholder="Seat Number" />
        <input type="text" name="travellerticketprice" placeholder="Ticket Price" />

        <button>Add</button>
      </form>
    );
  }
}


class Delete extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    /*Q5. Fetch the passenger details from the deletion form and call deleteTraveller()*/
    console.log("delete:", e.target);
    const travellerId = e.target.travellerId.value.trim();

    if (!travellerId) {
      alert('Please enter a traveller ID to delete.');
      return;
    }

    this.props.deleteTraveller(e.target.travellerId.value);
    //reset the form
    e.target.reset();
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
        <input type="text" name="travellerId" placeholder="Traveller Id" />
        <button>Delete</button>
      </form>
    );
  }
}

class Homepage extends React.Component {
	constructor() {
	super();
	}
	render(){
	return (
	<div>
		{/*Q2. Placeholder for Homepage code that shows free seats visually.*/}
    <h2>Free Seats</h2>
        <div>Booked Seats: {this.props.travellers.length}</div>
        <div>Free Seats: {10 - this.props.travellers.length}</div>

        <div style={{ display: 'flex', flexWrap: 'wrap', width: '200px' }}>
          {Array.from({ length: 10 }, (_, index) => (
            <div
              key={index}
              style={{
                width: '30px',
                height: '30px',
                backgroundColor:
                  index < this.props.travellers.length ? 'grey' : 'green',
                margin: '5px',
                borderRadius: '5px',
              }}
            />
          ))}
      </div>
	</div>);
	}
}

class TicketToRide extends React.Component {
  constructor() {
    super();
    this.state = { travellers: [], selector: 1};
    this.bookTraveller = this.bookTraveller.bind(this);
    this.deleteTraveller = this.deleteTraveller.bind(this);
  }

  setSelector(value)
  {
  	/*Q2. Function to set the value of component selector variable based on user's button click.*/
    this.setState({selector: value});
  }
  componentDidMount() {
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({ travellers: initialTravellers });
    }, 500);
  }

  bookTraveller(passenger) {
	    /*Q4. Write code to add a passenger to the traveller state variable.*/
      if (this.state.travellers.length >= 10) {
        alert('Cannot add traveller: Train is full.');
        return;
      }
      const updatedTravellers = this.state.travellers.concat(passenger);
      this.setState({travellers: updatedTravellers});
  }

  deleteTraveller(passenger) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
    console.log("deleteTraveller:", passenger);
  
    const passengerid = parseInt(passenger);
    const exists = this.state.travellers.some(traveller => traveller.id === passengerid);
    if (!exists) {alert(`Traveller with ID number ${passengerid} does not exist.`);
      return;
    };
    const updatedTravellers = this.state.travellers.filter(t => t.id !== passengerid);
    this.setState({travellers: updatedTravellers});
  }
  render() {
    return (
      <div>
        <h1>Ticket To Ride</h1>
	    <div>
	    {/*Q2. Code for Navigation bar. Use basic buttons to create a nav bar. Use states to manage selection.*/}
      <button onClick={() => this.setSelector(1)}>Homepage</button>
      <button onClick={() => this.setSelector(2)}>Display Travellers</button>
      <button onClick={() => this.setSelector(3)}>Add Travellers</button>
      <button onClick={() => this.setSelector(4)}>Delete Travellers</button>
	</div>

	<div>
		{/*Only one of the below four divisions is rendered based on the button clicked by the user.*/}
		{/*Q2 and Q6. Code to call Instance that draws Homepage. Homepage shows Visual Representation of free seats.*/}
    {this.state.selector === 1 && (<Homepage travellers={this.state.travellers} />)}

		{/*Q3. Code to call component that Displays Travellers.*/}
    {this.state.selector === 2 && (<Display travellers={this.state.travellers} deleteTraveller={this.deleteTraveller} />)}
		
		{/*Q4. Code to call the component that adds a traveller.*/}
    {this.state.selector === 3 && (<Add bookTraveller={this.bookTraveller}/>)}
		{/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
    {this.state.selector === 4 && (<Delete deleteTraveller={this.deleteTraveller} />)}

	</div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));