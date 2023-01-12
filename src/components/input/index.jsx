import React from "react";
import styles from "./style.module.css"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';


const DATA = []

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postTitle: '',
      postList: DATA
    }
  }
  handleDelete = (id) => {
    const filteredArr = this.state.postList.filter(i => i.id !== id)
    this.setState({ postList: filteredArr })
  }
  handleSubmitForm = (e) => {
    e.preventDefault()
    const copiedArr = [...this.state.postList]
    if (this.state.postTitle && this.state.postTitle.trim())
      copiedArr.push({
        id: Math.random(),
        body: '',
        title: this.state.postTitle
      })
    this.setState({postList: copiedArr})
    this.setState({postTitle: ''})
  }

  handleChangeInput = e => {
    this.setState({
      postTitle: e.target.value
    })
  }
  render() {
    return (
        <div className={styles.container}>
          <form onSubmit={this.handleSubmitForm}>
            <TextField size="small" id="outlined-basic" label="enter title" variant="outlined"
                       value={this.state.postTitle}
                // type="text"
                // placeholder='enter title'
                       onChange={this.handleChangeInput}
            />
            <Button className={styles.test} variant="contained" size="medium" type='submit'>add</Button>
          </form>
          {this.state.postList.map((item) => {
            return (
                <div className={styles.title} key={item.id}>
                  {item.title}
                  <Button size="small" variant="contained" startIcon={<DeleteIcon />} onClick={() => this.handleDelete(item.id)}>
                    Delete
                  </Button>
                </div>
            )
          })}
        </div>
    )
  }
}
