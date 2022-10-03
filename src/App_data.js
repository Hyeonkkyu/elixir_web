// import './App.css';
import axios from 'axios';

function App() {
    return (
        <>
            <button onClick={() => {
                axios.get("/api/test")
                    .then((result) => {
                        console.log(result);
                    })
                    .catch(() => {
                        console.log('fail');
                    })
            }}>
                나와라
            </button>

            <button onClick={() => {
                axios.get("/api/getUser")
                    .then((result) => {
                        console.log(result);
                    })
            }}>
                out!
            </button>
        </>
    )
}

export default App;