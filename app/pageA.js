require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./scss/main.scss');


class PageA extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="form-group">
                <a href="pageB.html" className="btn btn-sm btn-default">pageB</a>
            </div>
        );
    }
}

ReactDOM.render(<PageA />, document.getElementById('container'));
