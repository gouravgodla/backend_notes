import express from 'express';
const app = express();

// app.get('/', (req, res) => {
//     res.send('Server is ready');
// })

// get a lits of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Programmer Joke",
            content: "Why do programmers prefer dark mode? Because light attracts bugs!"
        },
        {
            id: 3,
            title: "Math Joke",
            content: "Why was the math book sad? It had too many problems."
        },
        {
            id: 4,
            title: "Computer Joke",
            content: "Why did the computer go to the doctor? Because it caught a virus!"
        },
        {
            id: 5,
            title: "Classic Joke",
            content: "Why don’t skeletons fight each other? They don’t have the guts."
        }
    ];
    res.send(jokes)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);

});