import { Button, Modal, Form } from "react-bootstrap";
import React from "react";

class Modalforex extends React.Component {
  state = {
    isEditing: false,
    myNewExp: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
      image: "https://picsum.photos/200",
    },
  };

  handleEditing = () => {
    console.log(this.props.expToEdit)
    if (this.props.expToEdit) {
      this.setState({
        isEditing: true,
        myNewExp: {
          role: this.props.expToEdit.role,
          company: this.props.expToEdit.company,
          startDate: this.props.expToEdit.startDate,
          endDate: this.props.expToEdit.endDate,
          description: this.props.expToEdit.description,
          area: this.props.expToEdit.area,
          image: this.props.expToEdit.image,
        },
      });
    } else {
      this.setState({
        isEditing: false,
        myNewExp: {
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
          image: "https://picsum.photos/200",
        },
      });
    }
  };
  componentDidMount = () => {
    this.handleEditing();
  };

  // componentDidUpdate = (prevProps) => {
  //   console.log('THIS IS prevProps: ', prevProps)
  //   console.log('THIS IS this.props: ', this.props)
  //   if (prevProps.expToEdit !== this.props.expToEdit){
  //     this.setState({
  //       myNewExp: {
  //         role: this.props.expToEdit.role,
  //         company: this.props.expToEdit.company,
  //         startDate: this.props.expToEdit.startDate,
  //         endDate: this.props.expToEdit.endDate,
  //         description: this.props.expToEdit.description,
  //         area: this.props.expToEdit.area,
  //         image: this.props.expToEdit.image,
  //   }})}}

  handleInput = (e) => {
    let id = e.target.id; // name or phone or numberOfPersons
    //console.log('ID OF THIS INPUT FIELD IS', id);

    this.setState({
      myNewExp: {
        ...this.state.myNewExp,
        [id]: e.target.value,
      },
    });
  };

  postNewExp = async (e) => {
    console.log("event: " + e);
    e.preventDefault();
    try {
      const andisToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZjMGM5YzZmZDIyODAwMTUzZmRiYWMiLCJpYXQiOjE2MTc2OTM4NTIsImV4cCI6MTYxODkwMzQ1Mn0.b_4i8l9HxOmAylxIxWyK1cX9Brjnydu_my16UsNd4PE";
      let resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userID}/experiences`,
        {
          method: "POST",
          body: JSON.stringify(this.state.myNewExp),
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + andisToken,
          },
        }
      );
      if (resp.ok) {
        alert("your exp has been saved");
        this.props.onHide(false);
      } else {
        alert("there was a problem");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  render() {
    //console.log(this.props.expToEdit);
    return (
      <>
        <Modal {...this.props}>
          <Modal.Header closeButton className="mt-1">
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Form className="mx-3 mt-1" onSubmit={this.postNewExp}>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Role"
                id="role"
                onChange={this.handleInput}
                value={this.state.myNewExp.role}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Company"
                id="company"
                onChange={this.handleInput}
                value={this.state.myNewExp.company}
              />
            </Form.Group>
            <div className="row">
              <Form.Group className="ml-3">
                <Form.Label>start date</Form.Label>
                <Form.Control
                  type="date"
                  id="startDate"
                  onChange={this.handleInput}
                  value={this.state.myNewExp.startDate}
                />
              </Form.Group>
              <Form.Group className="ml-5">
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type="date"
                  id="endDate"
                  onChange={this.handleInput}
                  value={this.state.myNewExp.endDate}
                />
              </Form.Group>
            </div>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                onChange={this.handleInput}
                value={this.state.myNewExp.description}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Area</Form.Label>
              <Form.Control
                type="text"
                placeholder="Area"
                id="area"
                onChange={this.handleInput}
                value={this.state.myNewExp.area}
              />
            </Form.Group>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  this.props.onHide(false);
                }}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </>
    );
  }
}

export default Modalforex;
