import React, { useState } from 'react';
import axios from 'axios';
import styles from './styles/OpinionForm.module.css';

function OpinionForm({ userId }) {
  const [opinionText, setOpinionText] = useState('');

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const csrftoken = getCookie('csrftoken');

    const response = await axios.post(`http://127.0.0.1:8000/api/users/${userId}/create_opinion/`, {
      text: opinionText,
    }, {
      headers: {
        'X-CSRFToken': csrftoken,
        'Content-Type': 'application/json'
      },
    });

    console.log('Opinion created:', response.data);
    setOpinionText('');
  } catch (error) {
    console.error('Error creating opinion:', error);
  }
};

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <textarea
        className={styles.textArea}
        value={opinionText}
        onChange={(e) => setOpinionText(e.target.value)}
        required
      />
      <button type="submit" className={styles.submitButton} disabled={!opinionText.trim()}>
        Submit Opinion
      </button>
    </form>
  );
}

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

export default OpinionForm;
