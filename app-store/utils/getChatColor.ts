export const getChatColor = (type?: string) => {
  switch (type) {
    case 'General Alert':
      return '#66C4FF';
    case 'Contact Aquired':
      return '#66FF99';
    case 'Contact Imminent':
      return '#FFFF66';
    case 'Contact Engaging':
      return '#FFA366';
    case 'Avoid Contact':
      return '#FF6666';
    default:
      return '#000000';
  }
};
