import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        id: "xyz",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anuj1160");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h3>ID: {id}</h3>
        <img src={avatar_url} />
        <h4>Contact: anuj1160</h4>
      </div>
    );
  }
}
export default UserClass;
