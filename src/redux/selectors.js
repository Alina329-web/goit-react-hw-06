export const getFilteredContacts = (state) => {
  const { items } = state.contacts;
  const { name } = state.filters;

  return items.filter((contact) =>
    contact.name.toLowerCase().includes(name.toLowerCase())
  );
};
