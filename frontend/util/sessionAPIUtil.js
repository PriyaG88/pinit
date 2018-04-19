export const signup = user => (
  fetch('api/users', {
    method: 'post',
    body: JSON.stringify(user)
  })
);

export const login = user => (
  fetch('api/sessions', {
    method: 'post',
    body: JSON.stringify(user)
  })
);

export const logout = () => (
  fetch('api/sessions', {
    method: 'delete'
  })
);
