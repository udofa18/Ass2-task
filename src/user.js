const User = (props) => {
    return (
      <li className="user__li">
        <h2>{props.name}</h2>
        <h3>{props.email}</h3>
      </li>
    );
  };
  export default User;
  