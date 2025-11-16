import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Note created successfully!');
        setTitle('');
        setContent('');
        navigate('/');
      } else {
        toast.error(data.message || 'Failed to create note');
      }
    } catch (error) {
      toast.error('Error creating note: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Create New Note</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="title" style={styles.label}>
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title"
              style={styles.input}
              disabled={loading}
            />
          </div>

          <div style={styles.formGroup}>
            <label htmlFor="content" style={styles.label}>
              Content
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter note content"
              rows="8"
              style={styles.textarea}
              disabled={loading}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button
              type="submit"
              style={{...styles.button, ...styles.submitButton}}
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Note'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              style={{...styles.button, ...styles.cancelButton}}
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    padding: '40px',
    width: '100%',
    maxWidth: '600px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#555',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  textarea: {
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    outline: 'none',
    transition: 'border-color 0.3s',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  button: {
    flex: 1,
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    color: 'white',
  },
};

export default CreatePage;

