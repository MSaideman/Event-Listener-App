const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#title').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    const description = document.querySelector('#content').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/pevents`, {
        method: 'POST',
        body: JSON.stringify({ name,description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create event');
      }
    }
  };
  
  document
    .querySelector('.new-pevent-form')
    .addEventListener('submit', newFormHandler);
