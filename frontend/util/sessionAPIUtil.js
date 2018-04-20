const token = document.getElementsByName('csrf-token')[0].content;

export const signup = user => (
  fetch('api/user', {
    method: 'post',
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-CSRF-Token': token,
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({user: user}),
    credentials: 'same-origin'
  })
  .then(res => {
    return res.json();
  })
);

export const login = user => (
  fetch('api/session', {
    method: 'post',
    body: JSON.stringify(user)
  })
);

export const logout = () => (
  fetch('api/session', {
    method: 'delete'
  })
);
