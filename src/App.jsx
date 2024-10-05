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
    isPaid: true,
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
    isPaid: false,
  },
];


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
    <td>{traveller.isPaid ? 'Paid': 'Unpaid'}</td>
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
          <th>Paid Status</th>
        </tr>
      </thead>
      <tbody>
        {/*Q3. write code to call the JS variable defined at the top of this function to render table rows.*/}
        {
            props.travellers.map(t => (
              <TravellerRow key={t.id} traveller={t} /> // 将单个旅客对象传递给 TravellerRow
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
    e.preventDefault();
    /*Q4. Fetch the passenger details from the add form and call bookTraveller()*/
  }

  render() {
    return (
      <form name="addTraveller" onSubmit={this.handleSubmit}>
	    {/*Q4. Placeholder to enter passenger details. Below code is just an example.*/}
        <input type="text" name="travellername" placeholder="Name" />
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
  }

  render() {
    return (
      <form name="deleteTraveller" onSubmit={this.handleSubmit}>
	    {/*Q5. Placeholder form to enter information on which passenger's ticket needs to be deleted. Below code is just an example.*/}
	<input type="text" name="travellername" placeholder="Name" />
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
    <p>{`Free Seats In Total: ${100 - this.props.travellers.length}`}</p>
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
  }

  deleteTraveller(passenger) {
	  /*Q5. Write code to delete a passenger from the traveller state variable.*/
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
    {this.state.selector === 1 && (
          <div>
            <Homepage travellers={this.state.travellers} />
            
            <h2>Seat Reservation Status</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', width: '320px' }}>
              {Array.from({length: 10}, (_, i) => {
                const isOccupied = this.state.travellers.length;
                return (<div key={i} style={{width: '15px', height: '15px', backgroundColor: isOccupied ? 'grey' : 'green', margin: '3px'}}></div>
                );
              })}
            </div>
          </div>
      )}
  
		{/*Q3. Code to call component that Displays Travellers.*/}
    {this.state.selector === 2 && (<Display travellers={this.state.travellers}/>)}
		
		{/*Q4. Code to call the component that adds a traveller.*/}
		{/*Q5. Code to call the component that deletes a traveller based on a given attribute.*/}
	</div>
      </div>
    );
  }
}

const element = <TicketToRide />;

ReactDOM.render(element, document.getElementById('contents'));
