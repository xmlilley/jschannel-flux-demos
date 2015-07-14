var React = require('react');
var Modal = require('react-bootstrap/lib/Modal');
var Button = require('react-bootstrap/lib/Button');

var IdeaModal = React.createClass({
  closeModal: function() {
    this.props.closeFunc();
  },

  render: function() {
    var idea = this.props.idea;
    return (
      <Modal show={this.props.show} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Idea: {idea.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Idea Detail:</h4>
          <p className="modal-body__text">{ idea.detail }</p>
          <hr />
          <h4>Participants</h4>
          <p className="modal-body__text">participant count: {idea.teamCount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeModal}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

module.exports = IdeaModal;