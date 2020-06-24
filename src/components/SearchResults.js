handleSearchChange = (event) => {
  console.log(event.target.value);
  const filter = event.target.value;
  const filteredList = this.state.users.filter((item) => {
    // merge data together, then see if user input is anywhere inside
    let values = Object.values(item).join("").toLowerCase();
    return values.indexOf(filter.toLowerCase()) !== -1;
  });
  this.setState({ filteredUsers: filteredList });
};
