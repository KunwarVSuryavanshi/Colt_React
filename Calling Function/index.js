function getMood(){
    const moods = ['Angry', 'Happy', 'Sad', 'Deppressed', 'Silly', 'Paranoid']
    return(
        moods[Math.floor(Math.random()*moods.length)]
    );
}

class MyMood extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    My Current Mood IS: {getMood()}
                </h1>
            </div>
        );
    }
}

ReactDOM.render(<MyMood/>, document.getElementById('root'));