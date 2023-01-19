export const AgeRestricted = () => {
    const age = Math.floor(Math.random() * 10);
    const isGreen = age >= 5 ? true : false;

    const refreshPage = () => window.location.reload();

    return (
        <div style={isGreen ? {color: 'green'} : {color: 'red'}}>
            <h2>{age} - {age >= 5 ? "Above age" : "Under Age"}</h2>
            <button onClick={refreshPage}>Refresh Page</button>
        </div>
    )
}