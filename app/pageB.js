require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./scss/main.scss');


class PageB extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="form-group">
                <a href="pageA.html" className="btn btn-sm btn-default">pageA</a>
            </div>
        );
    }
}

ReactDOM.render(<PageB />, document.getElementById('container'));
