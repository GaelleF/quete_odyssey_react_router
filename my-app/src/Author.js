import React, { Component } from 'react';

class Author extends Component {

    alertAuthor = () => {
        //const msg = ""onClick = {this.alertAuthor.bind(this)}
        alert(this.props.name)
    }

    render() {
       return  <div onClick ={this.alertAuthor.bind(this)} >
           auteur
        </div>
    }
}

export default Author