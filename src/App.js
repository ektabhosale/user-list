import React from 'react';


class App extends React.Component {
  state = {
    users: null,
    show: false,
    selectedUser: '',
    activities: [],
    pg:1
  }


  async componentDidMount() {
    fetch(`https://reqres.in/api/users?page=${this.state.pg}`)
      .then((resp) => {
        resp.json().then((result) => {
          console.log(result.data);
          this.setState({ users: result.data })
          
        })
      })
      

  }
  render() {
    
    return (
      <div className="main_div center_div">
      {/* <h1 className="header" >User List </h1> */}


      {
        this.state.users ?
          this.state.users.map(item =>

            <div>
              <ul className="list-group d-flex w-100 justify-content-between">
                <li key={item.id}  className="list-group-item content">
                  {/* this.handleModal(); */}
                  <a onClick={() => { this.fetchUser(item); this.handleModal() }} className="list-group-item list-group-item-action">
                    {item.first_name}


                  </a>
                </li>
              </ul>

              
            </div>

          )
          :
          null
      }
      

    </div>
)
}
}
export default App;