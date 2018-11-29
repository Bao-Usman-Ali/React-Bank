import React from 'react';

class Footer  extends React.Component{
    render(){
        return(
            <div className="MyFooter">
                <footer className="page-footer grey darken-4">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="cyan-text">Footer Content</h5>
                <p className="cyan-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="cyan-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
            </div>
        )
    }
}

export default Footer; 