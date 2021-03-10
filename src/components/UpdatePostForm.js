import React, { Component } from 'react';

class UpdatePostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  componentDidMount = () => {
    this.setState({
      title: this.props.posts[this.props.postId].title,
      content: this.props.posts[this.props.postId].content
    })
  }

  render() {
    return (
      <form onSubmit={(e) =>
          this.props.updatePost(e, this.props.postId, this.state)}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label htmlFor="content">Content</label>
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <input type="submit" value="Update Post" />
      </form>
    )
  }
}

export default UpdatePostForm;

/*
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class UpdatePostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
          title: '',
          console: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    componentDidMount = () => {
        console.log(this.props.posts[this.props.postId]);
            this.setState({
            title: this.props.posts[this.props.postId].title,
            content: this.props.posts[this.props.postId].content
        })
    }
/*
    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

     componentDidMount = () => {
       
         
         this.setState({
             title: this.props.posts[this.props.postId].title,
             content: this.props.posts[this.props.postId].content
         })
     }

*/
/*
    render() {
        return (
        <form onSubmit={(e) =>
             this.props.updatePost(e, this.props.postId, this.state)}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label htmlFor="content">Content</label>
            <textarea
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleChange}
            />
            <input type="submit" value="Update Post"/>
        </form>
        )
    }
}








export default UpdatePostForm;

*/