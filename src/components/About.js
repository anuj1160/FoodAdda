import React from "react";
import UserClass from "./UserClass";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS styles

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white p-8">
        <h1 className="text-5xl font-extrabold mb-4">About Class Component</h1>
        <h2 className="text-2xl mb-6">This is the awesome about section</h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
