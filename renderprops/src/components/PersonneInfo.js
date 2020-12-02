export const PersonneInfo = (props) => {
    const {name, email} = props.data;

    return (
    <>
        <p>Je m'appelle {name} </p>
        <p>et mon email est { email }</p>
    </>
    )
};

