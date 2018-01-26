const dog = () => {
    const sound = 'woof';

    return {
        talk: () => console.log(sound)
    }
}

const x = dog();

x.talk();

///////////////////////////////////

const username = 'echo';
const avatar = 'echo.png';

const user = {
    username,
    avatar,
    setUserName(username){
        this.username = username;
        return this;
    }    
}

console.log(user.setUserName('X').username);

///////////////////////////////////////////


const game = () => {
    let name;

    return {
        setName: (name) => {
            this.name = name;
        },
        getName: () => this.name
    }
}

var y = game();
y.setName('x');
console.log(y.getName());
