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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/pevents/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({
      id: id
    }),
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete event');
    }
  }
};

document
  .querySelector('#create-btn')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('#delete-btn')
  .addEventListener('click', delButtonHandler);
