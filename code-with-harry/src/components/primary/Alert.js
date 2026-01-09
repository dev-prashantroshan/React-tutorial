export default function Alert(props) {
  const capitalize = (msg) => {
    let firstChar = msg.charAt(0).toUpperCase();
    let remaining = msg.slice(1).toLowerCase();

    return firstChar + remaining;
  };

  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {capitalize(props.alert.msg)}
      </div>
    )
  );
}
