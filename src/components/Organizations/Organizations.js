import React from "react";
import userData from "../../data";

class Organizations extends React.Component {
  constructor() {
    super();
    this.state = {
      organizations: userData,
    };
  }
  render() {
    return (
      <div className="container">
        <h1 className="text-center mt-5 text-primary">Organizations</h1>
        <table className="table table-hover text-center table-bordered mt-5">
          <thead>
            <tr className="table-primary">
              <th scope="col">Organization Name</th>
              <th scope="col">Organization Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.organizations.map((organization) => (
              <tr key={organization.id}>
                <td>{organization.name}</td>
                <td>{organization.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Organizations;
