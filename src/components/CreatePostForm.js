//import { render } from '@testing-library/react';
import React, { Component } from 'react';

class CreatePostForm extends Component {
    constructor(props) {
        super(props) 
        

        this.state ={
            title: '',
            content: ''
        }
    }

handeChange = (e) => {
  
    const { name, value } = e.target;
    //  or const name = e.target.name; same of above
   // const value = e.target.value;
    //console.log(e.target.value);

    this.setState({
        [name]: value     //name equals both title and name so only on handleChange method
    })
}


        render() {

            //const { title, content } = this.state;
            //same as
            //const title = this.state.title
            //const content = this.state.title
            return (
                <form onSubmit={(e) => this.props.createPost(e, this.state)}> 
                    <label htmlFor="title">Title</label>
                    <input
                       type="text" 
                       name="title"
                       value={this.state.title}
                       onChange={this.handeChange}
                     />
                    <label htmlFor="content">Post Text</label>
                    <textarea
                       type="textarea"
                       name="content"
                       value={this.state.content}
                       onChange={this.handeChange}
                    />
                    <input type="Submit" value="Create a post!" />
                </form>
            )
        
    }


}
export default CreatePostForm;