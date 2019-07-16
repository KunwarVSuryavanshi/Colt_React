class Hello extends React.Component{
    render(){
        let bangs = "!".repeat(this.props.bangs);
        return(
            <div>
                Inside Hello.js
                <h1>
                    Hello {this.props.to} from {this.props.from} {bangs}
                </h1>
                <h1>
                    Hello {this.props.to} from {this.props.from} 
                </h1>
                <br/>
                <br/>
                <br/>
                <img src='https://media.tenor.co/images/be68053e1eab8245d80d92587b06f382/raw'></img>
            </div>
        );
    }
}
/*
                                            SOME OF ZHE NOTEZ
__________________________________________________________________________________________________________________________________________                                            

-------------- Can use here const props = this.props, when used then we will have to use props.to instead of this.props.to---------------- 
-------------- Props are immutable, therefore we can not change its value using this.props.to="Nope"--------------------------------------
-------------- If we want to pass a number through props then we need to use '{}', like num={3}-------------------------------------------

*/
