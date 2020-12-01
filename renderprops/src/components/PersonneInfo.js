import React from 'react';

function PersonneInfo(props) {
  const {name, username, email} = props.data

  return (
    <>
      <p>
        Je m'appelle {name} {username}
      </p>
      <p>
        Mon email est {email}
      </p>
    </>
  );
}

export default PersonneInfo;
