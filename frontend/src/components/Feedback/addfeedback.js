import React from "react";
import './addfeedback.css';
// import Trip from '../trips/trips'


class AddFeedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userMail: '',
      userName: '',
      feedback: '',
      tripId: ''
    };
    // this.changeTripeId = this.changeTripeId.bind(this)
    this.changeUserName = this.changeUserName.bind(this);
    this.changeFeedback = this.changeFeedback.bind(this);
    this.changeUserMail = this.changeUserMail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    //  console.log( this.props.location.state.trip)
    //  const tripId = this.props.location.state.trip._id
    //  this.setState({ tripId})
  }
  // getTripId = () => {
  //   var tripId; 
  //   $.ajax({
  //     type: "GET",
  //     url: "/trip",
  //     success: (res) => {
  //       for (var i in res) {
  //         alltrips.push(res[i])
  //       }
  //       this.setState({
  //         testtrips: alltrips
  //       })
  //     },
  //     error: function (err) {
  //       console.error(err)
  //     }
  //   })
  // }

  // changeTripeId(e) {
  //   this.setState({ tripId:this.props.location.state.trip._id})
  // }

  changeUserName(e) {
    this.setState({ userName: e.target.value })
  }

  changeUserMail(e) {
    this.setState({ userMail: e.target.value })
  }



  changeFeedback(e) {
    this.setState({ feedback: e.target.value })
  }


  onSubmit = (e) => {
    e.preventDefault();

    fetch('/addfeedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(response => response.json())
      .then(data => {
        alert("Thank You For Your Feedback !!");
        // window.location.href = '/'
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    this.setState({
      userMail: '',
      userName: '',
      feedback: '',
      tripId: ''
    })
  }

  render() {
    return (
      <div className="root1">
        <div id="move">
          <div className="name2">
            <h3 >Give Feedback</h3>
          </div><br />
          <form className="form" onSubmit={this.onSubmit}>
            <div className="details">
              <div className="namedetails">

                <input
                  className="inputborder"
                  placeholder="Enter Your Name Here"
                  type="text"
                  name="Name"
                  value={this.state.userName}
                  onChange={this.changeUserName}
                />
              </div><br />
              <div className="namedetails">
                <input
                  className="inputborder"
                  placeholder="Enter Your Email Here"
                  type="text"
                  name="Email"
                  value={this.state.userMail}
                  onChange={this.changeUserMail}
                />
              </div><br />
              <div className="namedetails">
                <input
                  className="inputborder"
                  placeholder="Enter Your Feedback Here"
                  type="text"
                  name="Feedback"
                  value={this.state.feedback}
                  onChange={this.changeFeedback}
                />
              </div><br />
              <div className="submit">
                <button className="button" onClick={this.handleClick}>
                  Submit
              </button>
              </div>
            </div>
          </form>
          <div class="vl"></div>
        </div>
      </div>


    );
  }
}


export default AddFeedback;