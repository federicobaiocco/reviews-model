import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ReviewItem extends Component{
    getStyle = () => {
        return {
            // textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: 'f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    };

    render() {
        const { _id, text, prediction } = this.props.review;
        return (
            <tr>
                <td style={{textAlign : 'left'}}>{text}</td>
                <td style={{textAlign : 'center', color: prediction == 1 ? 'green': 'red'}}>{prediction == 1 ? 'APPROVED' : 'DISAPPROVED'}</td>
                <td style={{textAlign : 'center'}}>
                    <button onClick={this.props.approveReview.bind(this, _id)} style={approveBtnStyle}>OK</button>
                </td>
                <td style={{textAlign : 'center'}}>
                    <button onClick={this.props.disapproveReview.bind(this, _id)} style={disapproveBtnStyle}>X</button>
                </td>
            </tr>
        )
    }
}

ReviewItem.propTypes = {
    approveReview: PropTypes.func.isRequired,
    disapproveReview: PropTypes.func.isRequired
};

const approveBtnStyle = {
  background: 'green',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer'
};

const disapproveBtnStyle = {
    background: 'red',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer'
  };
export default ReviewItem;
